import { User, Follow } from '../index';

export const createUser = async (data) => {
    const user = new User(data);
    const follow = new Follow({
        user: user._id
    })
    await user.save()
    await follow.save();
    return user;
}

export const findUser = async (data) => {
    return await User.findOne(data);
}
