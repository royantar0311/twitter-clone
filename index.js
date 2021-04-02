import {User, Tweet, Follow} from './db/mongodb/index'
import { getOwnTweets, follow, createUser, tweet, unfollow, findAllTweetOfFollowings } from './db/mongodb/operations'
import mongoose from 'mongoose';

const userData = {
    email: 'royantar2@gmail.com',
    username: 'royantar0312',
    name: {
        first: 'antar',
        last: 'roy'
    }
};
const tweetData = {
    text: 'second tweet #endregion #twitter-clone',
};
(async () => {
    // console.log(await follow('60674ec0ddb22f4bafe4f672', '60674e851c613b4ae875ecb1'));
    // console.log(await findAllTweetOfFollowings('60674ec0ddb22f4bafe4f672'));
    // await createUser(userData);   
    // console.log(await tweet('60674ec0ddb22f4bafe4f672', tweetData)); 
})();

