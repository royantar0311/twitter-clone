import { User, Tweet, Follow } from '../';

import mongoose from '../connection';

export const getOwnTweets = async (author_id) => {
    return await Tweet.find({ author: author_id }).sort({ 'createdAt': -1 });
}

export const follow = async (follower_id, following_id) => {
    const follow = await Follow.findOne({ user: follower_id });
    const index = follow.following.indexOf(following_id);
    if (index == -1) follow.following.push(following_id);
    return await follow.save();
}

export const unfollow = async (follower_id, following_id) => {
    const follow = await Follow.findOne({ user: follower_id });
    const index = follow.following.indexOf(following_id);
    if (index != -1) follow.following.splice(index, 1);
    return await follow.save();
}


export const tweet = async (author_id, data) => {
    const tweet_id = mongoose.Types.ObjectId();
    const tweet = new Tweet({
        _id: tweet_id,
        ...data,
        author: author_id
    });
    const user = await User.findById(author_id);
    user.tweets.push(tweet_id);
    await tweet.save()
    await user.save();
    return tweet;
}

export const findAllTweetOfFollowings = async (author_id) => {
    const author_ids = [];
    const follow = await Follow.findOne({ user: author_id });
    const followArray = follow.following;
    for (let i = 0; i < followArray.length; i++) {
        author_ids.push({ author: followArray[i] });
    }
    author_ids.push({ author: follow.user });
    return await Tweet.find({ $or: author_ids }).sort({ createdAt: -1 });
}

export const findByTags = async (author_id, tags) => {
    const tagObjectArray = [];
    tags.forEach(element => {
        tagObjectArray.push({ tags: element })
    });
    const author_ids = [];
    const follow = await Follow.findOne({ user: author_id });
    const followArray = follow.following;
    for (let i = 0; i < followArray.length; i++) {
        author_ids.push({ author: followArray[i] });
    }
    author_ids.push({ author: follow.user });
    return await Tweet.find({
        $and: [
            { $or: author_ids },
            { $or: tagObjectArray }
        ]
    }).sort({ createdAt: -1 });
}
