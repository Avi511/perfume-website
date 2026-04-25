import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import sendEmail from '../utils/sendEmail.js';

export const registerUserService = async (userData) => {
    const { firstName, lastName, email, password, phone, address, isAdmin, isSeller } = userData;

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
        isAdmin: isAdmin || false,
        isSeller: isSeller || false,
    });

    return {
        _id: user._id,
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        isSeller: user.isSeller,
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
            isAdmin: user.isAdmin,
            isSeller: user.isSeller,
            token: generateToken(user._id),
        };
    } else {
        throw new Error('Invalid email or password');
    }
};

export const forgotPasswordService = async (email) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('There is no user with that email');
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

    await user.save();

    const frontendUrl = process.env.FRONTEND_URL.replace(/\/$/, "");
    const resetUrl = `${frontendUrl}/reset-password/${resetToken}`;

    const message = `You are receiving this email because you (or someone else) have requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Password Reset Token',
            message,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();
        throw new Error('Email could not be sent');
    }
};

export const resetPasswordService = async (token, password) => {
    const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
        throw new Error('Invalid or expired token');
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    return {
        _id: user._id,
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        isSeller: user.isSeller,
        token: generateToken(user._id),
    };
};
