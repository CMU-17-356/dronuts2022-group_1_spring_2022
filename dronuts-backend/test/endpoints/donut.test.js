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

    it('the POST /donut endpoint should add a new donut to the inventory', function(done) {
        const data = 
        {
            "id" : 9999999999,
            "name" : "Test Donut",
            "price" : 1.30,
            "current_stock": 92
        }
        const postRequest = chai.request(app).post('/donut').send(data);

        postRequest.end((err, res) => {
            assert(res.statusCode == 200);
            done();
        });
    });
});
