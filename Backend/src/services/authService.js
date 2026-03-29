import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';

export const registerUserService = async (userData) => {
    const { firstName, lastName, email, password, phone, address } = userData;

    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('User already exists with this email');
    }

    let newUserId = "U0001";
    const lastUser = await User.findOne().sort({ createdAt: -1 });
    if (lastUser && lastUser.userId) {
        const lastNumber = parseInt(lastUser.userId.replace("U", ""), 10);
        if (!isNaN(lastNumber)) {
            newUserId = "U" + String(lastNumber + 1).padStart(4, '0');
        }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        userId: newUserId,
        firstName: firstName || "Unknown",
        lastName: lastName || "Unknown",
        email,
        password: hashedPassword,
        phone: phone || "0000000000",
        address: address || "No address provided",
    });

    return {
        _id: user._id,
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user._id),
    };
};

export const loginUserService = async (email, password) => {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        return {
            _id: user._id,
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id),
        };
    } else {
        throw new Error('Invalid email or password');
    }
};
