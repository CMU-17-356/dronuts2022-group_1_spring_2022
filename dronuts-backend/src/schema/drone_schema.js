'use strict';
const __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const mongoose_1 = __importDefault(require('mongoose'));
const Schema = mongoose_1.default.Schema;
const droneSchema = new Schema({
    id: {type: Number, required: true},
    nickname: String,
    active: Boolean,
});
exports.default = mongoose_1.default.model('Drone', droneSchema);
