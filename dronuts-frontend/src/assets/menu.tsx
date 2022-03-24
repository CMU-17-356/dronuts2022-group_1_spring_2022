/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import apple_krumb from "./donut_images/apple_krumb.jpg";
import bavarian_kreme from "./donut_images/bavarian_kreme.jpg";
import blueberry from "./donut_images/blueberry.jpg";
import boston_kreme from "./donut_images/boston_kreme.jpg";
import chocolate_frosted from "./donut_images/chocolate_frosted.jpg";
import chocolate_glaze from "./donut_images/chocolate_glaze.jpg";
import chocolate_kreme from "./donut_images/chocolate_kreme.jpg";
import cinnamon_sugar from "./donut_images/cinnamon_sugar.jpg";
import coconut from "./donut_images/coconut.jpg";
import cruller from "./donut_images/cruller.jpg";
import jelly from "./donut_images/jelly.jpg";
import marble_frosted from "./donut_images/marble_frosted.jpg";
import old_fashioned from "./donut_images/old_fashioned.jpg";
import original_glaze from "./donut_images/original_glaze.jpg";
import powdered_sugar from "./donut_images/powdered_sugar.jpg";
import sour_cream from "./donut_images/sour_cream.jpg";
import strawberry_frosted from "./donut_images/strawberry_frosted.jpg";
import vanilla_frosted from "./donut_images/vanilla_frosted.jpg";

const menu = {
  "Apple Krumb": {
    pic: apple_krumb,
  },
  "Bavarian Kreme": {
    pic: bavarian_kreme,
  },
  Blueberry: {
    pic: blueberry,
  },
  "Boston Kreme": {
    pic: boston_kreme,
  },
  "Chocolate Frosted": {
    pic: chocolate_frosted,
  },
  "Chocolate Glaze": {
    pic: chocolate_glaze,
  },
  "Chocolate Kreme": {
    pic: chocolate_kreme,
  },
  "Cinnamon Sugar": {
    pic: cinnamon_sugar,
  },
  Coconut: {
    pic: coconut,
  },
  Cruller: {
    pic: cruller,
  },
  Jelly: {
    pic: jelly,
  },
  "Marble Frosted": {
    pic: marble_frosted,
  },
  "Original Glaze": {
    pic: original_glaze,
  },
  "Powdered Sugar": {
    pic: powdered_sugar,
  },
  "Sour Cream": {
    pic: sour_cream,
  },
  "Strawberry Frosted": {
    pic: strawberry_frosted,
  },
  "Vanilla Frosted": {
    pic: vanilla_frosted,
  },
  "Old Fashioned": {
    pic: old_fashioned,
  },
};

export default function getMenuImage(name: string) {
  try {
    return menu[name].pic;
  } catch {
    return menu["Original Glaze"].pic;
  }
}
