import mongoose from 'mongoose';
const {Schema} = mongoose;

const orderStatusSchema = new Schema({
    orderId: {type: Number, required: true},
    droneId: {type: Number, required: true},
    status: {
        type: String,
        enum: ['Pending', 'Packing', 'InFlight', 'Complete'],
        required: true,
    },
});

export default mongoose.model('OrderStatus', orderStatusSchema);
