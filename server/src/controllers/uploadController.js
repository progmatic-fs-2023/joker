const fileUpload = async (req, res) => {
  try {
    console.log('files:', req.files);
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    // const { sampleFile } = req.files.sampleFile;
    // const uploadPath = `../uploads/${sampleFile.name}`;

    // Use the mv() method to place the file somewhere on your server
    // sampleFile.mv(uploadPath, function (err) {
    //   if (err) return res.status(500).send(err);
    // });
    res.send('File uploaded!');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  return null;
};

export default { fileUpload };
