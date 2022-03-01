const {app} = require('../../src/endpoints/routes');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;

chai.use(chaiHttp);

describe('New Order', function() {
    it('a valid order can be persisted into mongo', function(done) {
        const data = {'customerId': 42,
            'items': [
                {'itemId': 1, 'quantity': 2},
                {'itemId': 6, 'quantity': 8},
                {'itemId': 10, 'quantity': 2},
            ],
            'address': '5032 Forbes Ave.'};
        const postRequest = chai.request(app).post('/order').send(data);

        postRequest.end(function(err, res) {
            assert(res.statusCode == 200);
            assert(res.text == 'Order Placed');
            done();
        });
    });
});
