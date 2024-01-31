import jwt from 'jsonwebtoken';
import 'dotenv/config';

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers?.authorization || req.headers?.Authorization;
  if (!authHeader?.startsWith('Bearer '))
    return res.status(401).json({ message: 'AccessToken not found!' }); // invalid token
  console.log('verifyJWT Bearer:', authHeader); // Bearer token
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'AccessToken expired!' }); // invalid token
    req.user = decoded.UserInfo.username;
    req.role = decoded.UserInfo.role;
    console.log('Bearer verified user:', req.user, req.role);
    next();
    return null;
  });
  return null;
};

export default verifyJWT;
