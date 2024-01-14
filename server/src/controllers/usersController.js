import usersServices from '../services/usersServices';

const usersList = async (req, res) => {
  const users = await usersServices.getAllUsers();

  res.status(200).json(users);
};

const singleUser = async (req, res) => {
  const userID = req.params.id;
  const user = await usersServices.getUserByID(userID);

  res.status(200).json(user);
};

export default { usersList, singleUser };
