import tweetRoutes from './tweet.routes';
import authRoutes from './auth.routes';
const configureRoutes = (app) => {
    app.use('/auth', authRoutes);
    app.use('/tweet', tweetRoutes);
}
export default configureRoutes;