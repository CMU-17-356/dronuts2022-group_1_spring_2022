const Customer = require('../../src/customer_schema');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Customers must have an id', function() {
    expect(function() {
        new Customer().validate(function(err) {
            expect(err).to.exist;
        });
    });
});

describe('Customers should be able to be created with valid parameters',
    function() {
        const customer = new Customer({id: 1,
            first_name: 'Foo',
            last_name: 'Bar'});
        assert(customer.validate());
    });
