export default function verifyRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req?.role) {
      return res.sendStatus(401);
    }
    const rolesArray = [...allowedRoles];
    const result = rolesArray.includes(req?.role);
    if (!result) {
      return res.status(401).json({ message: 'Ask for higher permission!' });
    }
    next();
    return null;
  };
}
