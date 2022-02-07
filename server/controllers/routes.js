import UserSchema from '../models/userSchema.js';

export const getUsers = async (req, res) => {
    try {
        const userSchema = await UserSchema.find();
        console.log(userSchema);
        res.status(200).json(userSchema);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const body = req.body;
    const newUser = new UserSchema(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}