"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var drone_schema_1 = __importDefault(require("../../src/schema/drone_schema"));
var expect = require('chai').expect;
describe('Drone', function () {
    it('drones should always contain an id', function (done) {
        var m = new drone_schema_1.default();
        m.validate(function (err) {
            expect(err.errors.id).to.exist;
            done();
        });
    });
});
