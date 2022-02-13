const OrderStatus = require('../src/order_status_schema');
const expect = require('chai').expect;

describe('Onder Status', function() {
    it('order status should always contain an order id', function(done) {
        m = new OrderStatus();
        m.validate(function(err) {
            expect(err.errors.orderId).to.exist;
            done();
        });
    });

    it('order status should always contain a drone id', function(done) {
        m = new OrderStatus();
        m.validate(function(err) {
            expect(err.errors.droneId).to.exist;
            done();
        });
    });

    it('order status should only be one of' +
    'Pending, Packing, InFlight or Complete', function(done) {
        m = new OrderStatus({status: 'Missing'});
        m.validate(function(err) {
            expect(err.errors.status).to.exist;
            done();
        });
    });

    it('a valid status should pass', function(done) {
        m = new OrderStatus({status: 'Pending'});
        m.validate(function(err) {
            expect(err.errors.status).to.not.exist;
            done();
        });
    });
});
