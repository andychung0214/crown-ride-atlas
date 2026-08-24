"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const BikeParts = require("../js/data/bike-parts.js");

const requiredFields = [
  "purpose", "materials", "adjustment", "maintenance",
  "warningSigns", "workshopAdvice"
];

const expectedLayout = [
  ["top-tube", "上管", "frame-fork", 1, 525, 195, 360, 72],
  ["down-tube", "下管", "frame-fork", 2, 545, 286, 795, 155],
  ["head-tube", "頭管", "frame-fork", 3, 620, 230, 805, 212],
  ["seat-tube", "車架座管", "frame-fork", 4, 453, 273, 305, 228],
  ["seat-stay", "上叉", "frame-fork", 5, 342, 268, 135, 225],
  ["chain-stay", "下叉", "frame-fork", 6, 355, 350, 135, 390],
  ["fork", "前叉", "frame-fork", 7, 670, 305, 815, 320],
  ["derailleur-hanger", "後變速器吊耳", "frame-fork", 8, 278, 376, 115, 455],
  ["drop-handlebar", "彎把", "controls-contact", 9, 680, 132, 820, 78],
  ["stem", "龍頭", "controls-contact", 10, 636, 166, 800, 118],
  ["headset", "碗組", "controls-contact", 11, 610, 190, 790, 178],
  ["bar-tape", "手把帶", "controls-contact", 12, 691, 148, 852, 148],
  ["shift-brake-lever", "變速煞車把", "controls-contact", 13, 706, 156, 874, 192],
  ["saddle", "座墊", "controls-contact", 14, 418, 145, 255, 105],
  ["seatpost", "座桿", "controls-contact", 15, 433, 173, 270, 150],
  ["pedal", "踏板", "controls-contact", 16, 497, 370, 650, 450],
  ["crank-arm", "曲柄", "drivetrain", 17, 485, 365, 640, 410],
  ["chainring", "齒盤", "drivetrain", 18, 468, 350, 610, 378],
  ["bottom-bracket", "中軸", "drivetrain", 19, 449, 338, 590, 338],
  ["front-derailleur", "前變速器", "drivetrain", 20, 435, 303, 286, 303],
  ["rear-derailleur", "後變速器", "drivetrain", 21, 279, 401, 105, 490],
  ["chain", "鏈條", "drivetrain", 22, 365, 378, 228, 430],
  ["cassette", "飛輪", "drivetrain", 23, 252, 362, 92, 358],
  ["jockey-wheel", "導輪", "drivetrain", 24, 282, 414, 128, 512],
  ["rim", "輪圈", "wheels-brakes", 25, 715, 210, 865, 260],
  ["tire", "輪胎", "wheels-brakes", 26, 245, 202, 78, 175],
  ["valve", "氣嘴", "wheels-brakes", 27, 660, 470, 805, 500],
  ["hub", "花鼓", "wheels-brakes", 28, 715, 350, 860, 365],
  ["spoke", "輻條", "wheels-brakes", 29, 752, 315, 890, 300],
  ["axle", "貫通軸／快拆", "wheels-brakes", 30, 222, 350, 72, 325],
  ["disc-rotor", "碟盤", "wheels-brakes", 31, 690, 350, 845, 405],
  ["brake-caliper", "煞車卡鉗", "wheels-brakes", 32, 655, 315, 815, 445]
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

test("百科資料深度凍結且預設選取上管", () => {
  assert.equal(BikeParts.defaultPartId, "top-tube");
  assert.equal(Object.isFrozen(BikeParts), true);
  assert.ok(BikeParts.categories.every(Object.isFrozen));
  assert.ok(BikeParts.parts.every(Object.isFrozen));
  assert.ok(BikeParts.parts.every(part => Object.isFrozen(part.hotspot) && Object.isFrozen(part.labelAnchor)));
  assert.throws(() => { BikeParts.parts[0].name = "錯誤"; }, TypeError);
  assert.throws(() => { BikeParts.parts[0].hotspot.x = 0; }, TypeError);
});
