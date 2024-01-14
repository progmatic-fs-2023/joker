import usersServices from '../services/usersServices';
import 'dotenv/config';

const handleLogout = async (req, res) => {
  // TODO delete the accessToken on client too!
  // const cookies = req.cookies;
  const { cookies } = req;
  if (!cookies?.jwt) return res.sendStatus(204); // No content
  const refreshToken = cookies.jwt;
  // Is refreshToken in DB?
  const foundUser = await usersServices.findUserByRefreshToken(refreshToken);
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true });
    return res.sendStatus(204);
  }
  // delete refreshToken in DB
  await usersServices.deleteUserRefreshToken(foundUser.id);
  // console.log('logout result, refreshToken deleted:', result)
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); // secure: true - only serves on https, this is the production version
  return res.status(204).json({ message: 'Successfully logged out' });
};

export default { handleLogout };
