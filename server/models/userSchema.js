import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    _id: String,
    name: {
        first: String,
        last: String
    },
    gender: String,
    email: String,
    password: String,
});

const UserSchema = mongoose.model('userSchema', userSchema);

export default UserSchema;