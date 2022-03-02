const {app} = require('../../src/endpoints/routes');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;

chai.use(chaiHttp);

describe('Update OrderStatus', function() {
    it('an invalid order status should result in an error', function(done) {
        // Intentional invalid orderId to not interfere with production values
        const data = {'orderId': -1, 'status': 'omplete'};
        const patchRequest = chai.request(app).patch('/orderstatus').send(data);

        patchRequest.end(function(err, res) {
            assert(res.statusCode == 400);
            assert(res.text == 'Bad Request: invalid order status');
            done();
        });
    });
});
