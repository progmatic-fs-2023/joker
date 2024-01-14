export default function verifyRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req?.role) {
      return res.sendStatus(401);
    }
    const rolesArray = [...allowedRoles];
    // console.log('Allowed roles:', rolesArray);
    // console.log('Request role:', req?.role);
    const result = rolesArray.includes(req?.role);
    if (!result) {
      return res.sendStatus(401);
    }
    next();
    return null;
  };
}
