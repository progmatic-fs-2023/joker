import usersServices from '../services/usersServices';

const usersList = async (req, res) => {
  try {
    const users = await usersServices.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const singleUser = async (req, res) => {
  const { id } = req.params;
  // console.log('userID ok!', id);
  try {
    const user = await usersServices.getUserByID(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const newUser = async (req, res) => {
  const { id } = req.params;
  // console.log('userID ok!', id);
  try {
    const user = await usersServices.createNewUser(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updateObject = { ...req.body };
  console.log('body ok!', updateObject);
  try {
    const user = await usersServices.updateUserData(id, updateObject);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  // const { id } = req.params;
  const userId = req.params.id;
  console.log('user ID ok!', userId);
  try {
    const user = await usersServices.deleteUserByID(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { usersList, singleUser, newUser, updateUser, deleteUser };
