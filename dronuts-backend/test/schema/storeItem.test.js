'use strict';
const __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const storeItem_schema_1 = __importDefault(require('../../src/schema/storeItem_schema'));
const expect = require('chai').expect;
const assert = require('chai').assert;
describe('Store Item', function() {
    it('StoreItems must have an id', function(done) {
        const m = new storeItem_schema_1.default();
        m.validate(function(err) {
            expect(err).to.exist;
            done();
        });
    });
    it('StoreItem should be able to be created with valid parameters', function(done) {
        const storeItem = new storeItem_schema_1.default({id: 1,
            name: 'donut',
            price: 24.70});
        assert(storeItem.validate());
        done();
    });
});
