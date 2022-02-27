import mongoose from 'mongoose';
const {Schema} = mongoose;

const droneSchema = new Schema({
    id: {type: Number, required: true},
    nickname: String,
    active: Boolean,
});

export default mongoose.model('Drone', droneSchema);
