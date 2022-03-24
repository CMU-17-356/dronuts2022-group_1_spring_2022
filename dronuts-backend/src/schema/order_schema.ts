import mongoose from 'mongoose';
const {Schema} = mongoose;

const orderSchema = new Schema({
    id: {type: Number, required: true},
    customerId: {type: Number, required: true},
    items: {
        type: [{itemId: Number, quantity: Number}],
        validate: function(v: [{itemId:Number, quantity:Number}]) {
            return v !== undefined && v.length > 0;
        },
    },
    address: {type: String, required: true},
    timeStamp: Date,
});

export default mongoose.model('Order', orderSchema);
