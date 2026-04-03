import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  // Replace 'secretkey' with process.env.JWT_SECRET in production
  const secret = process.env.JWT_SECRET || 'superdeepsecretkey';
  return jwt.sign({ id }, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN || '30d',
  });
};

export default generateToken;
