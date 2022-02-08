const ShopOrder = require('../src/dronuts-backend/order_schema.js');
const expect = require('chai').expect;

describe('Order', function() {
    it('orders should always contain an id', function(done) {
        m = new ShopOrder();
        m.validate(function(err) {
            expect(err.errors.id).to.exist;
            done();
        });
    });

    it('orders should always have a customer', function(done) {
        m = new ShopOrder();
        m.validate(function(err) {
            expect(err.errors.customerId).to.exist;
            done();
        });
    });

    it('orders should contain at least one item', function(done) {
        m = new ShopOrder({items: []});
        m.validate(function(err) {
            expect(err.errors.items).to.exist;
            done();
        });
    });
});
