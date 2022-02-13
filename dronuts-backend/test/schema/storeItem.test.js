const StoreItem = require('../../src/storeItem_schema');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('StoreItems must have an id', function() {
    expect(function() {
        new StoreItem().validate(function(err) {
            expect(err).to.exist;
        });
    });
});

describe('StoreItem should be able to be created with valid parameters',
    function() {
        const storeItem = new StoreItem({id: 1,
            name: 'donut',
            price: 24.70});
        assert(storeItem.validate());
    });
