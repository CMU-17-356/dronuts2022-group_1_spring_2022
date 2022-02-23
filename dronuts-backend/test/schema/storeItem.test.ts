import StoreItem from '../../src/schema/storeItem_schema';
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Store Item', function() {
    it('StoreItems must have an id', function(done) {
        const m = new StoreItem();
        m.validate(function(err: any) {
            expect(err).to.exist;
            done();
        });
    });
    it('StoreItem should be able to be created with valid parameters',
        function(done) {
            const storeItem = new StoreItem({id: 1,
                name: 'donut',
                price: 24.70});
            assert(storeItem.validate());
            done();
        });
});

