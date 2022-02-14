"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var storeItem_schema_1 = __importDefault(require("../src/storeItem_schema"));
var expect = require('chai').expect;
var assert = require('chai').assert;
describe('Store Item', function () {
    it('StoreItems must have an id', function (done) {
        var m = new storeItem_schema_1.default();
        m.validate(function (err) {
            expect(err).to.exist;
            done();
        });
    });
    it('StoreItem should be able to be created with valid parameters', function (done) {
        var storeItem = new storeItem_schema_1.default({ id: 1,
            name: 'donut',
            price: 24.70 });
        assert(storeItem.validate());
        done();
    });
});
