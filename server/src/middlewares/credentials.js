import allowedOrigins from '../config/allowedOrigins';

const credentials = (req, res, next) => {
  // const origin = req.headers.origin;
  const { origin } = req.headers;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', true);
  }
  next();
};

export default credentials;
