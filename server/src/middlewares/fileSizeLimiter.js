const FILE_SIZE_LIMIT = 5000000; // 5 MByte

const fileSizeLimiter = (req, res, next) => {
  const { files } = req;
  const filesOverLimit = [];
  Object.keys(files).forEach(key => {
    if (files[key].size > FILE_SIZE_LIMIT) {
      filesOverLimit.push(files[key].name);
    }
  });
  if (filesOverLimit.length) {
    console.log('File size limit 5MByte reached!');
    res.status(500).json({ message: 'File size limit 5MByte reached! Try again!' });
  } else {
    next();
  }
};

export default fileSizeLimiter;
