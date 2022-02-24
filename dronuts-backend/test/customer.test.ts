import Customer from '../src/customer_schema';
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Customer', function() {
    it('Customers must have an id', function(done) {
        const m = new Customer();
        m.validate(function(err: { errors: { id: any; }; }) {
            expect(err.errors.id).to.exist;
            done();
        });
    });
    it('Customers should be able to be created with valid parameters',
        function(done) {
            const customer = new Customer({id: 1,
                first_name: 'Foo',
                last_name: 'Bar'});
            assert(customer.validate());
            done();
        });
});


