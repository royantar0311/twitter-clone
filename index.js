import {User, Tweet} from './db/mongodb/index'
import mongoose from 'mongoose';
(async () => {
    try{
        const user_id = mongoose.Types.ObjectId();
        const tweet_id = mongoose.Types.ObjectId();
        console.log(user_id, tweet_id);
        const user = new User({
            _id: user_id,
            email: 'royantar1@gmail.com',
            username: 'royantar0311',
            name: {
                first: 'antar',
                last: 'roy'
            }
        });
        const tweet = new Tweet({
            _id: tweet_id,
            text: 'this is a tweet with hashtags #endregion #twitter-clone',
            author: user._id
        })
        user.tweets.push(tweet._id);       
        const tweetResult = await tweet.save();
        const userResult = await user.save();
        console.log("tweet -> ", tweetResult);
        console.log("user -> ", userResult)
    }catch(err){
        console.log(err);
    }
})();
(async () => {
    try{
        const tweet = await Tweet.findOne({_id: '6066cb959f29f53a685ec3eb'}).populate('author');
        console.log(tweet);
    }
    catch(err) {
        console.log(err);
    }
});