import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: String,
    name: {
        first: String,
        last: String
    },
    email: String,
    password: String,
});

const UserSchema = mongoose.model('userSchema', userSchema);

export default UserSchema;