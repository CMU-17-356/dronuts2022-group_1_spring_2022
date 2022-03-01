import mongoose from 'mongoose';
const {Schema} = mongoose;
const { order_status_status } = require('../enums');

const orderStatusSchema = new Schema({
    orderId: {type: Number, required: true},
    droneId: {type: Number, required: true},
    status: {
        type: String,
        enum: order_status_status,
        required: true,
    },
});

export default mongoose.model('OrderStatus', orderStatusSchema);
