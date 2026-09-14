"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const BikeParts = require("../js/data/bike-parts.js");

const requiredFields = [
  "purpose", "materials", "adjustment", "maintenance",
  "warningSigns", "workshopAdvice"
];

const safetyCriticalCrackPartIds = [
  "seat-tube", "derailleur-hanger", "pedal",
  "jockey-wheel", "valve", "spoke"
];

const expectedLayout = [
  ["top-tube", "上管", "frame-fork", 1, 520, 190, 360, 72],
  ["down-tube", "下管", "frame-fork", 2, 544, 300, 795, 155],
  ["head-tube", "頭管", "frame-fork", 3, 621, 220, 805, 212],
  ["seat-tube", "車架座管", "frame-fork", 4, 438, 272, 305, 228],
  ["seat-stay", "上叉", "frame-fork", 5, 340, 263, 135, 225],
  ["chain-stay", "下叉", "frame-fork", 6, 355, 350, 135, 390],
  ["fork", "前叉", "frame-fork", 7, 676, 299, 815, 320],
  ["derailleur-hanger", "後變速器吊耳", "frame-fork", 8, 259, 370, 115, 455],
  ["drop-handlebar", "彎把", "controls-contact", 9, 680, 142, 820, 78],
  ["stem", "龍頭", "controls-contact", 10, 636, 166, 800, 118],
  ["headset", "碗組", "controls-contact", 11, 613, 196, 790, 178],
  ["bar-tape", "手把帶", "controls-contact", 12, 698, 142, 852, 148],
  ["shift-brake-lever", "變速煞車把", "controls-contact", 13, 714, 170, 874, 192],
  ["saddle", "座墊", "controls-contact", 14, 410, 151, 255, 105],
  ["seatpost", "座桿", "controls-contact", 15, 415, 173, 270, 150],
  ["pedal", "踏板", "controls-contact", 16, 520, 384, 650, 450],
  ["crank-arm", "曲柄", "drivetrain", 17, 480, 368, 640, 410],
  ["chainring", "齒盤", "drivetrain", 18, 455, 310, 610, 378],
  ["bottom-bracket", "中軸", "drivetrain", 19, 455, 350, 590, 338],
  ["front-derailleur", "前變速器", "drivetrain", 20, 437, 306, 286, 303],
  ["rear-derailleur", "後變速器", "drivetrain", 21, 272, 402, 105, 490],
  ["chain", "鏈條", "drivetrain", 22, 365, 380, 228, 430],
  ["cassette", "飛輪", "drivetrain", 23, 272, 350, 92, 358],
  ["jockey-wheel", "導輪", "drivetrain", 24, 299, 413, 128, 512],
  ["rim", "輪圈", "wheels-brakes", 25, 715, 218, 865, 260],
  ["tire", "輪胎", "wheels-brakes", 26, 245, 205, 78, 175],
  ["valve", "氣嘴", "wheels-brakes", 27, 647, 469, 805, 500],
  ["hub", "花鼓", "wheels-brakes", 28, 715, 350, 860, 365],
  ["spoke", "輻條", "wheels-brakes", 29, 760, 324, 890, 300],
  ["axle", "貫通軸／快拆", "wheels-brakes", 30, 245, 350, 72, 325],
  ["disc-rotor", "碟盤", "wheels-brakes", 31, 673, 350, 845, 405],
  ["brake-caliper", "煞車卡鉗", "wheels-brakes", 32, 673, 315, 815, 445]
];

test("公路車百科具有精確公開 API、四分類與 32 個唯一零件", () => {
  assert.deepEqual(Object.keys(BikeParts), ["categories", "parts", "defaultPartId"]);
  assert.deepEqual(BikeParts.categories.map(item => item.id), [
    "frame-fork", "controls-contact", "drivetrain", "wheels-brakes"
  ]);
  assert.equal(BikeParts.parts.length, 32);
  assert.equal(new Set(BikeParts.parts.map(item => item.id)).size, 32);
  assert.deepEqual(
    BikeParts.parts.map(part => [
      part.id, part.name, part.categoryId, part.number,
      part.hotspot.x, part.hotspot.y, part.labelAnchor.x, part.labelAnchor.y
    ]),
    expectedLayout
  );
});

test("每個零件都有座標、七類內容與有效關聯", () => {
  const ids = new Set(BikeParts.parts.map(item => item.id));
  for (const part of BikeParts.parts) {
    assert.ok(Number.isFinite(part.hotspot.x) && Number.isFinite(part.hotspot.y));
    assert.ok(Number.isFinite(part.labelAnchor.x) && Number.isFinite(part.labelAnchor.y));
    for (const field of requiredFields) assert.ok(part[field].trim().length >= 12, `${part.id}.${field}`);
    assert.ok(Array.isArray(part.relatedParts) && part.relatedParts.length >= 1);
    assert.ok(part.relatedParts.every(id => ids.has(id) && id !== part.id));
  }
  assert.equal(new Set(BikeParts.parts.map(part => requiredFields.map(field => part[field]).join("|"))).size, 32);
});

test("安全關鍵零件的裂損警訊明確要求停止騎乘", () => {
  const missingInstructionIds = safetyCriticalCrackPartIds.filter(id => {
    const part = BikeParts.parts.find(item => item.id === id);
    assert.ok(part, `缺少安全關鍵零件：${id}`);
    return !part.warningSigns.includes("停止騎乘");
  });

  assert.deepEqual(missingInstructionIds, []);
});

test("百科資料深度凍結且預設選取上管", () => {
  assert.equal(BikeParts.defaultPartId, "top-tube");
  assert.equal(Object.isFrozen(BikeParts), true);
  assert.equal(Object.isFrozen(BikeParts.categories), true);
  assert.equal(Object.isFrozen(BikeParts.parts), true);
  assert.ok(BikeParts.categories.every(Object.isFrozen));
  assert.ok(BikeParts.parts.every(Object.isFrozen));
  assert.ok(BikeParts.parts.every(part => Object.isFrozen(part.hotspot) && Object.isFrozen(part.labelAnchor)));
  assert.ok(BikeParts.parts.every(part => Object.isFrozen(part.relatedParts)));
  assert.throws(() => { BikeParts.categories.push({ id: "wrong", name: "錯誤" }); }, TypeError);
  assert.throws(() => { BikeParts.parts.pop(); }, TypeError);
  assert.throws(() => { BikeParts.parts[0].relatedParts.push("wrong"); }, TypeError);
  assert.throws(() => { BikeParts.parts[0].name = "錯誤"; }, TypeError);
  assert.throws(() => { BikeParts.parts[0].hotspot.x = 0; }, TypeError);
});

test("煞車卡鉗文案區分油壓碟煞、機械碟煞與輪圈煞車", () => {
  const caliper = BikeParts.parts.find(part => part.id === "brake-caliper");
  const content = [caliper.purpose, caliper.materials, caliper.adjustment, caliper.maintenance, caliper.workshopAdvice].join("｜");

  ["油壓碟煞", "機械碟煞", "活塞", "拉線", "來令片", "輪圈煞車", "拉臂", "樞軸", "煞車皮"].forEach(term => {
    assert.match(content, new RegExp(term), `煞車卡鉗文案缺少「${term}」`);
  });
  assert.match(caliper.adjustment, /油壓碟煞.*排氣/);
  assert.match(caliper.adjustment, /機械碟煞.*拉線張力.*來令片間隙/);
  assert.match(caliper.workshopAdvice, /輪圈煞車皮僅適用於輪圈煞車/);
});

test("輻條文案要求同側相對張力均勻但不強求左右相等", () => {
  const spoke = BikeParts.parts.find(part => part.id === "spoke");

  assert.match(spoke.adjustment, /同側.*相對張力.*均勻/);
  assert.match(spoke.adjustment, /左右.*不一定相同/);
});

test("BikeParts UMD 註冊不覆寫既有 CrownRideAtlas namespace", () => {
  const source = fs.readFileSync(path.join(__dirname, "../js/data/bike-parts.js"), "utf8");
  const sentinel = { preserved: true };
  const context = { CrownRideAtlas: { sentinel } };

  vm.runInNewContext(source, context);

  assert.equal(context.CrownRideAtlas.sentinel, sentinel);
  assert.equal(context.CrownRideAtlas.BikeParts.parts.length, 32);
});
