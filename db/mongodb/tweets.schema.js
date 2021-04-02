import mongoose from './connection';

const tweetSchema = mongoose.Schema({
    text: { type: String, required: true},
    author: { type: mongoose.Schema.ObjectId, ref: 'User'},
    tags: {type: Array},
});

tweetSchema.path('text').validate(function(text){
    if( text.length > 120 ) return false;
    var re = /(?:^|\W)#(\w+)(?!\w)/g, match, tags = [];
    while (match = re.exec(text)) {
        tags.push(match[1]);
    }
    this.tags = tags;
    return true;
}, 'text length should be at most 120 characters');

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;
