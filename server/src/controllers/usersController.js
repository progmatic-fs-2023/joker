import { getAllUsers, getUserByID } from '../services/usersServices.js'

const usersList = async (req, res) => {
    const users = await getAllUsers();

    res.status(200).json(users);
};

const singleUser = async (req, res) => {
    const userID = req.params.id;
    const user = await getUserByID(userID);

    res.status(200).json(user);
};

export default { usersList, singleUser }