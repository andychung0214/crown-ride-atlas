import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import {
  auditBrouterRoadPolicy,
  buildTrack,
  cacheFingerprint,
  serializeBundle
} from './generate-tracks.mjs';
import { parseGpxSegments } from './lib/route-art-source.mjs';
import { parseBundleSource } from './validate-tracks.mjs';

export function assertSameWaypoints(actual, expected, label) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`${label}與產生 raw geometry 的控制點不一致；拒絕沿用舊快取或發布。`);
  }
}

async function main() {
// 研究產物只寫入 ignored staging；通過道路及地理查核後才可發布。
let west;
const reference = await fetch('https://ctyeh.com/api/routes/route/gpx/twin-towers-520/');
if (!reference.ok) throw new Error(`Reference HTTP ${reference.status}`);
const points = parseGpxSegments(await reference.text())[0];
// 簡化來源只能作走廊參考；重新路由後仍必須通過道路政策，不直接發布600點原檔。
west = [[121.5402,25.2875], ...points.filter((p,i)=>i % 8 === 0 && i > 4 && i < points.length-4).map(p=>[p.lng,p.lat]),[120.8507,21.9058]]
  .filter(([lng, lat]) => !(
    // 關渡原參考點使路由折返穿越兩小段 footway。
    (lat > 25.12 && lat < 25.14 && lng > 121.445 && lng < 121.46)
    // 高雄原參考點位於 bicycle=no 與 pedestrian 道路上。
    || (lat > 22.69 && lat < 22.715 && lng > 120.285 && lng < 120.30)
    // 小港南側原參考點位於未標示鋪面的 track 上。
    || (lat > 22.51 && lat < 22.53 && lng > 120.36 && lng < 120.38)
  ));
// 中華一路 22.7131 一帶有 16 公尺 bicycle=no 標籤；由東側一般道路繞過後再回原走廊。
west.splice(west.findIndex(([, lat]) => lat < 22.69), 0,
  [120.289, 22.718], [120.296, 22.718], [120.296, 22.707]);
const directory = new URL('../tools/route-data/.staging/challenge-refresh/', import.meta.url);
await fs.mkdir(directory, { recursive: true });
const target = new URL('west-reference-v4.json', directory);
let payload;
try {
  const [cachedPayload, cachedWaypoints] = await Promise.all([
    fs.readFile(target, 'utf8'),
    fs.readFile(new URL('west-waypoints-v4.json', directory), 'utf8')
  ]);
  assertSameWaypoints(west, JSON.parse(cachedWaypoints), 'BRouter 快取');
  payload = JSON.parse(cachedPayload);
}
catch (error) {
  if (error.code !== 'ENOENT') throw error;
  const url = new URL('https://brouter.de/brouter');
  url.search = new URLSearchParams({ lonlats: west.map(point=>point.join(',')).join('|'), profile:'fastbike', alternativeidx:'0', format:'geojson' });
  const response = await fetch(url, { signal: AbortSignal.timeout(120000) });
  if (!response.ok) throw new Error(`BRouter ${response.status}: ${(await response.text()).slice(0,500)}`);
  payload = await response.json();
  await fs.writeFile(target, JSON.stringify(payload));
  await fs.writeFile(new URL('west-waypoints-v4.json',directory), JSON.stringify(west));
}
const audit = auditBrouterRoadPolicy(payload);
const serviceViolations = audit.violations.filter(item => (
  item.rule === 'conditional-highway' && item.value === 'service'
));
const serviceSegments = serviceViolations.map(item => item.segment);
const taggedServiceDistanceM = serviceViolations
  .filter(item => /bicycle=(yes|designated|permissive)|route_bicycle_(ncn|rcn)=yes|cycleway=|surface=(asphalt|paved|concrete)/.test(item.wayTags))
  .reduce((sum, item) => sum + item.distanceM, 0);
console.log(JSON.stringify({
  properties: payload.features[0].properties['track-length'],
  points:payload.features[0].geometry.coordinates.length,
  nonServiceViolations: audit.violations.filter(item => !(
    item.rule === 'conditional-highway' && item.value === 'service'
  )),
  service: {
    segmentCount: serviceSegments.length,
    distanceM: serviceViolations.reduce((sum, item) => sum + item.distanceM, 0),
    taggedDistanceM: taggedServiceDistanceM,
    untaggedDistanceM: serviceViolations.reduce((sum, item) => sum + item.distanceM, 0)
      - taggedServiceDistanceM,
    segmentSha256: createHash('sha256').update(JSON.stringify(serviceSegments)).digest('hex')
  }
},null,2));

if (process.argv.includes('--publish')) {
  const generatedAt = '2026-09-14T00:00:00.000Z';
  const projectRoot = new URL('../', import.meta.url);
  const seedDirectory = new URL('tools/route-data/seeds/', projectRoot);
  const publishedBundleUrl = new URL('js/data/tracks/challenges.js', projectRoot);
  const roadAuditUrl = new URL('tools/route-data/road-audit.json', projectRoot);
  const westSeed = JSON.parse(await fs.readFile(new URL('challenge-west-twin-towers.json', seedDirectory), 'utf8'));
  const eastSeed = JSON.parse(await fs.readFile(new URL('challenge-twin-towers.json', seedDirectory), 'utf8'));
  assertSameWaypoints(
    west,
    westSeed.waypoints.map(waypoint => [waypoint.lng, waypoint.lat]),
    '西線正式 seed'
  );
  const existingTracks = parseBundleSource('challenges', await fs.readFile(publishedBundleUrl, 'utf8'));
  const existingRoadAudit = JSON.parse(await fs.readFile(roadAuditUrl, 'utf8'));
  const oldEastAudit = existingRoadAudit.routes['challenge-east-twin-towers']
    || existingRoadAudit.routes['challenge-twin-towers'];
  const eastPayload = {
    type: 'Feature',
    properties: {
      messages: [['Longitude', 'Latitude', 'Distance', 'WayTags'], ...oldEastAudit.segments]
    },
    geometry: { type: 'LineString', coordinates: oldEastAudit.rawGeometry }
  };
  const westRoadAudit = auditBrouterRoadPolicy(payload, westSeed.roadPolicyExceptions);
  const westTrack = buildTrack(payload, { routeId: westSeed.id, seed: westSeed, generatedAt });
  const eastTrack = buildTrack(eastPayload, {
    routeId: eastSeed.id,
    seed: eastSeed,
    generatedAt: oldEastAudit.generatedAt
  });
  const twinTowerIds = new Set([
    'challenge-twin-towers',
    'challenge-west-twin-towers',
    'challenge-east-twin-towers'
  ]);
  const tracks = Object.fromEntries(Object.entries(existingTracks)
    .filter(([routeId]) => !twinTowerIds.has(routeId)));
  tracks[eastSeed.id] = eastTrack;
  tracks[westSeed.id] = westTrack;
  const eastAudit = {
    ...oldEastAudit,
    requestFingerprint: cacheFingerprint(eastSeed)
  };
  const westAudit = {
    requestFingerprint: cacheFingerprint(westSeed),
    rawGeometrySha256: westRoadAudit.rawGeometrySha256,
    generatedAt,
    messageRows: westRoadAudit.messageRows,
    rawGeometry: payload.features[0].geometry.coordinates,
    segments: westRoadAudit.segments
  };
  const auditRoutes = {};
  for (const [routeId, entry] of Object.entries(existingRoadAudit.routes)) {
    if (twinTowerIds.has(routeId)) {
      if (!auditRoutes[eastSeed.id]) {
        auditRoutes[eastSeed.id] = eastAudit;
        auditRoutes[westSeed.id] = westAudit;
      }
    } else {
      auditRoutes[routeId] = entry;
    }
  }
  await fs.writeFile(publishedBundleUrl, serializeBundle('challenges', tracks));
  await fs.writeFile(roadAuditUrl, `${JSON.stringify({
    ...existingRoadAudit,
    routes: auditRoutes
  }, null, 2)}\n`);
}
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
