const mongoose = require('mongoose');

const storeItemSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: String,
    price: Number,
    current_stock: Number,
});

module.exports = mongoose.model('storeItem', storeItemSchema);
