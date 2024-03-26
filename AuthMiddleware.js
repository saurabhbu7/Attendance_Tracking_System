const jwt = require('jsonwebtoken');

class AuthMiddleware {
  generateToken(user) {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  }

  verifyToken(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
      return res.status(401).send('No token, authorization denied');
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (err) {
      res.status(401).send('Token is not valid');
    }
  }
}

module.exports = new AuthMiddleware();
