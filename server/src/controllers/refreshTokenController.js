import jwt from 'jsonwebtoken';
import 'dotenv/config';
import usersServices from '../services/usersServices';

const handleRefreshToken = async (req, res) => {
  // const cookies = req.cookies // cookie secure: false !
  const { cookies } = req; // cookie secure: false !
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  console.log('cookies jwt match:', refreshToken);
  const foundUser = await usersServices.findUserByRefreshToken(refreshToken);
  if (!foundUser) return res.sendStatus(403); // Forbidden
  // evaluate JWT
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.email !== decoded.username) return res.sendStatus(403);
    // const role = foundUser.role;
    const { role } = foundUser;
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.email,
          role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '60s' },
    );
    res.json({ accessToken });
    return null;
  });
  return null;
};

export default { handleRefreshToken };
