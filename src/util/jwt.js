import jwt from 'jsonwebtoken';
import { AccessDenied } from './errors';
import dotenv from "dotenv";

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;
export const sign = (payload) => {
    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
}

export const verify = (token) => {
    try {
        return jwt.verify(token, jwtSecret);
    } catch (err) {
        throw new AccessDenied('invalid token');
    }
}