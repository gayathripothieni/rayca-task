const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  
  if (!authHeader) {
    return res.status(401).send('Access Denied: No Token Provided');
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET); // Decode the token
    console.log(verified, "verified")
    req.user = verified; // Attach decoded token payload to req.user
    console.log(req.user, "Decoded JWT payload"); // Check if the role is present here
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};

module.exports = authMiddleware;
