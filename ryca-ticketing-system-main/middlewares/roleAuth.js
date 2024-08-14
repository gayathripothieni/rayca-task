const roleAuth = (allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user.role; // Role extracted from the JWT token
  
      console.log(res, "The response")
      console.log(allowedRoles, "allowedRoles")
      console.log(userRole, "userRole")
      if (allowedRoles.includes(userRole)) {
        next(); // User has permission, proceed to the next middleware/controller
      } else {
        res.status(403).send('Action Not Allowed');
      }
    };
};
  
module.exports = roleAuth;
  