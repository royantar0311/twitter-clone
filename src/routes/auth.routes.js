import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
const saltRounds = Number(process.env.SALT_ROUNDS) || 11;
import { AccessDenied, BadRequest, sign } from '../util';
import { createUser, findUser } from '../../db/mongodb/operations';
import { handlePromiseRejection } from '../middlewares';
import { signUpSchema, loginSchema, validate } from '../validation'

router.post('/signup', handlePromiseRejection(async (req, res) => {
    const result = await validate(signUpSchema, req.body);
    const { email,
        username,
        firstName,
        lastName,
        password,
    } = result;
    if (await findUser({ $or: [{ username }, { email }] })) {
        throw new BadRequest('email or username already exists')
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    await createUser({
        email,
        username,
        name: {
            first: firstName,
            last: lastName,
        },
        password: hashedPassword,
    })
    res.json({
        message: "success"
    });

}));

router.post('/login', handlePromiseRejection(async (req, res) => {
    const { password, email } = await validate(loginSchema, req.body);
    const user = await findUser({ email });
    if (!user) throw new AccessDenied('username or password is incorrect');
    const { password: hashedPassword, username } = user;
    const result = await bcrypt.compare(password, hashedPassword);
    if (!result) {
        throw new AccessDenied();
    }
    const token = sign({ username });
    res.json({
        message: "success",
        token
    });
}));
export default router;