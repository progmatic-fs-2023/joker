import herbsServices from '../services/herbsServices';

const herbsList = async (req, res) => {
  const response = await herbsServices.getAllHerbs();

  res.status(200).json(response);
};

const herb = async (req, res) => {
  const herbID = req.params.id;
  const response = await herbsServices.getHerbByID(herbID);

  res.status(200).json(response);
};

export default { herbsList, herb };
