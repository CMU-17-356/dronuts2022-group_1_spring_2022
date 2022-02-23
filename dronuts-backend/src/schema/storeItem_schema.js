'use strict';
const __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const mongoose_1 = __importDefault(require('mongoose'));
const storeItemSchema = new mongoose_1.default.Schema({
    id: {type: Number, required: true},
    name: String,
    price: Number,
    current_stock: Number,
});
exports.default = mongoose_1.default.model('storeItem', storeItemSchema);
