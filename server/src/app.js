import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from './config/corsOptions';
import verifyJWT from './middlewares/verifyJWT';
import { logger } from './middlewares/logEvents';
import credentials from './middlewares/credentials';
import errorHandler from './middlewares/errorHandler';
import apiRouter from './routes/apiRouter';
import rootRouter from './routes/rootRouter';
import registerRouter from './routes/registerRouter';
import authRouter from './routes/authRouter';
import refreshRouter from './routes/refreshRouter';
import logoutRouter from './routes/logoutRouter';
import herbsRouter from './routes/herbsRouter';
import usersRouter from './routes/usersRouter';
import ordersRouter from './routes/ordersRouter';

const app = express();

// custom middleware logger
app.use(logger);
// handle options credentials check - before CORS!, and fetch cookies credentials requirement
app.use(credentials);
// Cross Origin Resourse Sharing
app.use(cors(corsOptions));
// built-in middleware to handle urlencoded data and JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleware for cokies
app.use(cookieParser());

// serve static files
app.use('/', express.static('public'));

// public API endpoints
app.use('/', rootRouter);
app.use('/register', registerRouter);
app.use('/auth', authRouter);
app.use('/refresh', refreshRouter);
app.use('/logout', logoutRouter);

app.use('/api', apiRouter);
app.use('/api/herbs', herbsRouter);
app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);

// every route below will require authenticate process first
app.use(verifyJWT);

// catch all other direct request (not handled by frontend)
app.all('/*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile('404.html');
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use(errorHandler);

export default app;
