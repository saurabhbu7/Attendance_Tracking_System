const jwt = require('jsonwebtoken');
const User = require('./User');

exports.register = function(req, res) {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });

  user.save(function(err) {
    if (err) {
      return res.status(500).send('Error registering new user.');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).send({ token });
  });
};

exports.login = function(req, res) {
  const { email, password } = req.body;

  User.findOne({ email }, function(err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');

    user.comparePassword(password, function(err, isMatch) {
      if (isMatch && !err) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).send({ token });
      } else {
        res.status(401).send('Password is not correct.');
      }
    });
  });
};
