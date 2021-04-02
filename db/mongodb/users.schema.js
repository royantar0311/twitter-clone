import mongoose from './connection';

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true},
    name: {
        first: { type: String, required: true, trim: true},
        last: { type: String, required: true, trim: true} 
    },
    tweets: [{type: mongoose.Schema.ObjectId, ref: 'Tweet'}]
}, { strict: true, timestamps: true });

userSchema.path('email').validate(function(email){
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
}, 'invalid email')

userSchema.path('username').validate(function(username){
    return username.length >= 6;
}, 'username should have at least 6 characters')

userSchema.virtual('fullName').get(function(){
    return this.name.first + ' ' + this.name.last;
})

const User = mongoose.model('User', userSchema);
export default User;