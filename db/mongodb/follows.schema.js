import mongoose from './connection';

const followSchema = mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: 'User'},
    following: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
}, { strict: true});

const Follow = mongoose.model('Follow', followSchema);

export default Follow;