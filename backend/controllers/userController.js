const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  const userExists = await User.findOne({ username });
  if (userExists) return res.status(400).json({ message: 'Username already exists' });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = new User({ username, password: hashedPassword });
  await user.save();

  res.json({ message: 'User registered successfully' });
};

// Login a user
exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: 'Invalid username or password' });

  // Check password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Invalid username or password' });

  // Generate JWT
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token });
};
