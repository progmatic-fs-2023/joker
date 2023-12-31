import { getAllHerbs, getHerbByID } from '../services/herbsServices.js'

const herbsList = async (req, res) => {
    const herbs = await getAllHerbs();

    res.status(200).json(herbs);
};

const herb = async (req, res) => {
    const herbID = req.params.id;
    const herb = await getHerbByID(herbID);

    res.status(200).json(herb);
};

export default { herbsList, herb }