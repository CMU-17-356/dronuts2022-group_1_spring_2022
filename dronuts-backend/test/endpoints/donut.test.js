const {app} = require('../../src/endpoints/routes');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;


chai.use(chaiHttp);

describe('Donuts', function() {
    it('the GET /donuts endpoint should return donut inventory', function(done) {
        const getRequest = chai.request(app).get('/donuts');
        getRequest.end((err, res) => {
            assert(res.statusCode == 200);
            done();
        });
    });
});
