const Drone = require('../src/dronuts-backend/drone_schema.js');
const expect = require('chai').expect;

describe('Drone', function() {
    it('drones should always contain an id', function(done) {
        m = new Drone();
        m.validate(function(err) {
            expect(err.errors.id).to.exist;
            done();
        });
    });
});
