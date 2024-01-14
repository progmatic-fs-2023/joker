/* eslint-disable no-unused-vars */
import logEvents from './logEvents';

export default function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const errDetails = `\x1b[31m(${req.ip}) ${req.method} ${req.url} (${statusCode}): \x1b[0m${err.message}`;
  console.log(errDetails);

  logEvents(`${err.name}\t${err.message}\n${errDetails}`, 'errLog.txt');

  res.status(statusCode).send({
    errorCode: statusCode,
    message: err.message,
  });
}
