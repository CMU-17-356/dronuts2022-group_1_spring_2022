"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_schema_js_1 = __importDefault(require("../src/order_schema.js"));
var expect = require('chai').expect;
describe('Order', function () {
    it('orders should always contain an id', function (done) {
        var m = new order_schema_js_1.default();
        m.validate(function (err) {
            expect(err.errors.id).to.exist;
            done();
        });
    });
    it('orders should always have a customer', function (done) {
        var m = new order_schema_js_1.default();
        m.validate(function (err) {
            expect(err.errors.customerId).to.exist;
            done();
        });
    });
    it('orders should contain at least one item', function (done) {
        var m = new order_schema_js_1.default({ items: [] });
        m.validate(function (err) {
            expect(err.errors.items).to.exist;
            done();
        });
    });
});
