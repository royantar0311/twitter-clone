import {User, Tweet, Follow} from './db/mongodb/index'
import { getOwnTweets, follow, createUser, tweet, unfollow, findAllTweetOfFollowings, findByTags } from './db/mongodb/operations'
import mongoose from 'mongoose';

const userData = {
    email: 'royantar3@gmail.com',
    username: 'royantar0313',
    name: {
        first: 'antar',
        last: 'roy'
    }
};
const tweetData = {
    text: 'second tweet #endregion #clone-clone',
};
(async () => {
    // console.log(await findByTags('606823946577a09ae65b933e', ["clone"]));
    // console.log(await follow('60674ec0ddb22f4bafe4f672', '60674e851c613b4ae875ecb1'));
    // console.log(await findAllTweetOfFollowings('60674ec0ddb22f4bafe4f672'));
    // console.log(await createUser(userData));   
    // console.log(await tweet('606823946577a09ae65b933e', tweetData)); 
})();

