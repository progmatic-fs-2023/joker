import allowedOrigins from './allowedOrigins';

const corsOptions = {
  origin: (origin, callback) => {
    // TODO remove !origin after development
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // null replaces the error, because here could be no error
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
