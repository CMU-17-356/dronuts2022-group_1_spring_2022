const mongoose = require('mongoose');

const storeItemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  current_stock: Number,
});

module.exports = mongoose.model('storeItem', storeItemSchema);