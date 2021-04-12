import express from 'express';
import errorHandlers from './middlewares/errorHandlers.middleware';
import configureRoutes from './routes';


const app = express();

app.use(express.json());

configureRoutes(app);
errorHandlers(app)


export default app;