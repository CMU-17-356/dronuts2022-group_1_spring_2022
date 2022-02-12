const mongoose = require('mongoose');
const {Schema} = mongoose;

const droneSchema = new Schema({
    id: {type: Number, required: true},
    nickname: String,
    active: Boolean,
});

module.exports = mongoose.model('Drone', droneSchema);
