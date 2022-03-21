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
    name: "Apple Krumb",
    price: 1.25,
    classic: false,
    pic: apple_krumb,
  },
  "Bavarian Kreme": {
    name: "Bavarian Kreme",
    price: 1.25,
    classic: false,
    pic: bavarian_kreme,
  },
  Blueberry: {
    name: "Blueberry",
    price: 1.0,
    classic: true,
    pic: blueberry,
  },
  "Boston Kreme": {
    name: "Boston Kreme",
    price: 1.25,
    classic: false,
    pic: boston_kreme,
  },
  "Chocolate Frosted": {
    name: "Chocolate Frosted",
    price: 1.0,
    classic: true,
    pic: chocolate_frosted,
  },
  "Chocolate Glaze": {
    name: "Chocolate Glaze",
    price: 0.8,
    classic: true,
    pic: chocolate_glaze,
  },
  "Chocolate Kreme": {
    name: "Chocolate Kreme",
    price: 1.25,
    classic: false,
    pic: chocolate_kreme,
  },
  "Cinnamon Sugar": {
    name: "Cinnamon Sugar",
    price: 1.0,
    classic: true,
    pic: cinnamon_sugar,
  },
  Coconut: {
    name: "Coconut",
    price: 1.25,
    classic: false,
    pic: coconut,
  },
  Cruller: {
    name: "Cruller",
    price: 1.25,
    classic: false,
    pic: cruller,
  },
  Jelly: {
    name: "Jelly",
    price: 1.25,
    classic: true,
    pic: jelly,
  },
  "Marble Frosted": {
    name: "Marble Frosted",
    price: 1.5,
    classic: false,
    pic: marble_frosted,
  },
  "Original Glaze": {
    name: "Original Glaze",
    price: 0.8,
    classic: true,
    pic: original_glaze,
  },
  "Powdered Sugar": {
    name: "Powdered Sugar",
    price: 0.8,
    classic: true,
    pic: powdered_sugar,
  },
  "Sour Cream": {
    name: "Sour Cream",
    price: 1.25,
    classic: false,
    pic: sour_cream,
  },
  "Strawberry Frosted": {
    name: "Strawberry Frosted",
    price: 1.00,
    classic: true,
    pic: strawberry_frosted,
  },
  "Vanilla Frosted": {
    name: "Vanilla Frosted",
    price: 1.00,
    classic: true,
    pic: vanilla_frosted,
  },
  "Old Fashioned": {
    name: "Old Fashioned",
    price: 0.8,
    classic: true,
    pic: old_fashioned,
  },
};

export function getMenuImage(name: string) {
  return menu[name].pic;
}
