import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import usersServices from '../services/usersServices';
import 'dotenv/config';

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res.status(400).json({
      message: 'Username and password required!',
    });
  const foundUser = await usersServices.getUserByEmail(user);
  if (!foundUser) return res.sendStatus(401);
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    const { role, id: userId, email: userName } = foundUser;
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.email,
          role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '60s' }, // 60s for testing only
    );
    const refreshToken = jwt.sign({ username: foundUser.email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    });
    // saving refreshtoken with current user to DB
    await usersServices.updateUserRefreshToken(foundUser.id, refreshToken);
    // HTTP browser
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    // ThunderClient test
    // res.cookie('jwt', refreshToken, {
    //   httpOnly: true,
    //   sameSite: 'None',
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
    res.status(201).json({ userName, userId, role, accessToken });
  } else {
    res.status(401).json({ error: `User ${user} wrong password!` });
  }
  return null;
};

export default { handleLogin };
