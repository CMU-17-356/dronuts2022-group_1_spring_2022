'use strict';
const __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const order_status_schema_1 = __importDefault(require('../../src/schema/order_status_schema'));
const expect = require('chai').expect;
describe('Order Status', function() {
    it('order status should always contain an order id', function(done) {
        const m = new order_status_schema_1.default();
        m.validate(function(err) {
            expect(err.errors.orderId).to.exist;
            done();
        });
    });
    it('order status should always contain a drone id', function(done) {
        const m = new order_status_schema_1.default();
        m.validate(function(err) {
            expect(err.errors.droneId).to.exist;
            done();
        });
    });
    it('order status should only be one of' +
        'Pending, Packing, InFlight or Complete', function(done) {
        const m = new order_status_schema_1.default({status: 'Missing'});
        m.validate(function(err) {
            expect(err.errors.status).to.exist;
            done();
        });
    });
    it('a valid status should pass', function(done) {
        const m = new order_status_schema_1.default({status: 'Pending'});
        m.validate(function(err) {
            expect(err.errors.status).to.not.exist;
            done();
        });
    });
});
