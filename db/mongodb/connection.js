import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const options = {
    useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URL, options, (err) => {
    if(err)console.error(err);
    else console.log('mongodb connected')
})

export default mongoose;