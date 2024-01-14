import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import fsPromises from 'fs/promises';
import fs from 'node:fs';

const logEvents = async (message, logFile) => {
  const dateTime = `${format(new Date(), 'yyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync('./logs')) {
      fs.mkdir('./logs', err => {
        if (err) throw err;
        console.log('directory created');
      }); // testing
    } else {
      console.log('directory exist, no further process');
    }
    await fsPromises.appendFile(`./logs/${logFile}`, logItem);
  } catch (err) {
    console.error(err);
  }
};

export const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
  // console.log(`${req.method}\t${req.headers.origin}\t${req.url}`)
  next();
};

export default logEvents;
