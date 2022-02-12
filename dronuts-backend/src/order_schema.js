const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    id: {type: Number, required: true},
    customerId: {type: Number, required: true},
    items: {
        type: [Number],
        validate: function(v) {
            return v !== undefined && v.length > 0;
        },
    },
    address: {type: String, required: true},
    timeStamp: Date,
});

module.exports = mongoose.model('Order', orderSchema);
