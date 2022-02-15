import OrderStatus from '../src/order_status_schema';
const expect = require('chai').expect;

describe('Order Status', function() {
    it('order status should always contain an order id', function(done) {
        const m = new OrderStatus();
        m.validate(function(err: { errors: { orderId: any; }; }) {
            expect(err.errors.orderId).to.exist;
            done();
        });
    });

    it('order status should always contain a drone id', function(done) {
        const m = new OrderStatus();
        m.validate(function(err: { errors: { droneId: any; }; }) {
            expect(err.errors.droneId).to.exist;
            done();
        });
    });

    it('order status should only be one of' +
    'Pending, Packing, InFlight or Complete', function(done) {
        const m = new OrderStatus({status: 'Missing'});
        m.validate(function(err: { errors: { status: any; }; }) {
            expect(err.errors.status).to.exist;
            done();
        });
    });

    it('a valid status should pass', function(done) {
        const m = new OrderStatus({status: 'Pending'});
        m.validate(function(err: { errors: { status: any; }; }) {
            expect(err.errors.status).to.not.exist;
            done();
        });
    });
});
