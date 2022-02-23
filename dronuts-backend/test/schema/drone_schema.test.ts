import Drone from '../../src/schema/drone_schema';
const expect = require('chai').expect;

describe('Drone', function() {
    it('drones should always contain an id', function(done) {
        const m = new Drone();
        m.validate(function(err: { errors: { id: any; }; }) {
            expect(err.errors.id).to.exist;
            done();
        });
    });
});
