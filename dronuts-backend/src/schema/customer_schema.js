'use strict';
const __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const mongoose_1 = __importDefault(require('mongoose'));
const customerSchema = new mongoose_1.default.Schema({
    id: {type: Number, required: true},
    first_name: String,
    last_name: String,
    payment_info: String,
    default_address: String,
    contact_info: [String],
    username: String,
    password: String,
});
exports.default = mongoose_1.default.model('Customer', customerSchema);
