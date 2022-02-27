import mongoose from 'mongoose';

const storeItemSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: String,
    price: Number,
    current_stock: Number,
});

export default mongoose.model('storeItem', storeItemSchema);
