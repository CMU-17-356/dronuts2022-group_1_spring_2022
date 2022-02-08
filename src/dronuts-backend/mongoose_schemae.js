const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

const customerSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  payment_info: String, 
  default_address: String,
  contact_info: [String],
  username: String,
  password: String
});

const storeItemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  current_stock: Number
});

const testSchema = new mongoose.Schema({
  name: String,
});

const Customer = mongoose.model('Customer', customerSchema);

const cust1 = new Customer({ 
  id: '1',   
  first_name: "Test",
  last_name: "Customer",
  payment_info: "1234-5678-9012-3456", 
  default_address: "5000 Forbes Ave",
  contact_info: ["a", "b", "c"],
  username: "testuseriscool",
  password: "12345isareallysecurepassword" 
});

console.log(cust1.first_name + " " + cust1.last_name); // 'Eyeball Test'