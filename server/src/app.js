import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.middleware';
import errorHandler from './middlewares/errorHandler.middleware';
import apiRouter from './routes/api.route';
import herbsRouter from './routes/herbsRouter';
import usersRouter from './routes/usersRouter';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/api', apiRouter);
app.use('/api/herbs', herbsRouter);
app.use('/api/users', usersRouter);

app.use(errorHandler);
export default app;
