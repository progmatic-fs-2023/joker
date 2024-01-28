const fileUpload = async (req, res) => {
  try {
    console.log('files:', req.files);
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'No files were uploaded!' });
    }
    const { files } = req;
    // Use the mv() method to place the file somewhere on your server
    const pictures = [];
    Object.keys(files).forEach(key => {
      const filePath = `img/${files[key].name}`;
      pictures.push(`http://localhost:3000/${filePath}`);
      console.log('pictures array:', pictures);
      files[key].mv(`public/${filePath}`, err => {
        if (err) return res.status(500).json({ message: err.message });
        return null;
      });
    });
    res.status(201).json({
      message: 'Files uploaded!',
      pictures,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  return null;
};

export default { fileUpload };
