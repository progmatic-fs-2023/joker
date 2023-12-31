import { getAllHerbs, getHerbByID } from '../services/herbsServices';

const herbsList = async (req, res) => {
  const response = await getAllHerbs();

  res.status(200).json(response);
};

const herb = async (req, res) => {
  const herbID = req.params.id;
  const response = await getHerbByID(herbID);

  res.status(200).json(response);
};

export default { herbsList, herb };
