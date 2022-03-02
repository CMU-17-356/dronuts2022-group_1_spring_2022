import mongoose from 'mongoose';
const {Schema} = mongoose;
const {orderStatusStatus} = require('../enums');

const orderStatusSchema = new Schema({
    orderId: {type: Number, required: true},
    droneId: {type: Number, required: true},
    status: {
        type: String,
        enum: orderStatusStatus,
        required: true,
    },
});

export default mongoose.model('OrderStatus', orderStatusSchema);
