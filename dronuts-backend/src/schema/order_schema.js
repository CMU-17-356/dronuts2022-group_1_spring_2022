'use strict';
const __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const mongoose_1 = __importDefault(require('mongoose'));
const Schema = mongoose_1.default.Schema;
const orderSchema = new Schema({
    id: {type: Number, required: true},
    customerId: {type: Number, required: true},
    items: {
        type: [Number, Number],
        validate: function(v) {
            return v !== undefined && v.length > 0;
        },
    },
    address: {type: String, required: true},
    timeStamp: Date,
});
exports.default = mongoose_1.default.model('Order', orderSchema);
