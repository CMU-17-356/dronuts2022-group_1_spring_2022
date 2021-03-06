import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    first_name: String,
    last_name: String,
    payment_info: String,
    default_address: String,
    contact_info: [String],
    username: String,
    password: String,
});

export default mongoose.model('Customer', customerSchema);
