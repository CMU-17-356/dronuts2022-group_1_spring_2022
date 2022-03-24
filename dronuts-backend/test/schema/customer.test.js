"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var customer_schema_1 = __importDefault(require("../../src/schema/customer_schema"));
var expect = require('chai').expect;
var assert = require('chai').assert;
describe('Customer', function () {
    it('Customers must have an id', function (done) {
        var m = new customer_schema_1.default();
        m.validate(function (err) {
            expect(err.errors.id).to.exist;
            done();
        });
    });
    it('Customers should be able to be created with valid parameters', function (done) {
        var customer = new customer_schema_1.default({ id: 1,
            first_name: 'Foo',
            last_name: 'Bar' });
        assert(customer.validate());
        done();
    });
});
