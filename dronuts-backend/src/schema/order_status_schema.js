'use strict';
const __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const mongoose_1 = __importDefault(require('mongoose'));
const Schema = mongoose_1.default.Schema;
const orderStatusSchema = new Schema({
    orderId: {type: Number, required: true},
    droneId: {type: Number, required: true},
    status: {
        type: String,
        enum: ['Pending', 'Packing', 'InFlight', 'Complete'],
        required: true,
    },
});
exports.default = mongoose_1.default.model('OrderStatus', orderStatusSchema);
