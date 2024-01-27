import bcrypt from 'bcrypt';
import usersServices from '../services/usersServices';

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res.status(400).json({
      message: 'Username and password required!',
    });
  // check for duplicate in the DB
  const duplicate = await usersServices.getUserByEmail(user);
  if (duplicate) return res.status(409).json({ conflict: `Username ${user} alredy exist!` }); // Conflict http status code
  try {
    // hash/encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10); // 10 salt is the default in bcrypt
    // create and store the new user in DB
    const result = await usersServices.createNewUser(user, hashedPwd);
    console.log('new user created:', result);
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  return null;
};

const handleUserVerify = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await usersServices.findUserByVerifyString(id);
    if (result) {
      const verifiedUser = await usersServices.updateUserByVerifyString(result.id);
      res
        .status(201)
        .json({ success: `User email ${verifiedUser.email} verified! Now you can login!` });
    } else {
      res.status(401).json({ message: `New user verification error, try again!` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  return null;
};

export default { handleNewUser, handleUserVerify };
