'use strict';
const __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const drone_schema_js_1 = __importDefault(require('../../src/schema/drone_schema.js'));
const expect = require('chai').expect;
describe('Drone', function() {
    it('drones should always contain an id', function(done) {
        const m = new drone_schema_js_1.default();
        m.validate(function(err) {
            expect(err.errors.id).to.exist;
            done();
        });
    });
});
