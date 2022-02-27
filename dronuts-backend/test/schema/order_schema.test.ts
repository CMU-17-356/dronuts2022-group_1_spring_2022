import ShopOrder from '../../src/schema/order_schema';
const expect = require('chai').expect;

describe('Order', function() {
    it('orders should always contain an id', function(done) {
        const m = new ShopOrder();
        m.validate(function(err: { errors: { id: any; }; }) {
            expect(err.errors.id).to.exist;
            done();
        });
    });

    it('orders should always have a customer', function(done) {
        const m = new ShopOrder();
        m.validate(function(err: { errors: { customerId: any; }; }) {
            expect(err.errors.customerId).to.exist;
            done();
        });
    });

    it('orders should contain at least one item', function(done) {
        const m = new ShopOrder({items: []});
        m.validate(function(err: { errors: { items: any; }; }) {
            expect(err.errors.items).to.exist;
            done();
        });
    });
});
