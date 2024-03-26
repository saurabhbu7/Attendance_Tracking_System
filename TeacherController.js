const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Teacher = require('../models/Teacher');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const PasswordService = require('../services/PasswordService');

class TeacherController {
  async register(req, res) {
    try {
      // Validate request data
      if (!req.body.email || !req.body.password) {
        return res.status(400).send('Missing email or password');
      }

      // Check if teacher already exists
      let teacher = await Teacher.findOne({ email: req.body.email });
      if (teacher) {
        return res.status(400).send('Teacher already exists');
      }

      // Hash password
      const hashedPassword = PasswordService.hashPassword(req.body.password);

      // Create new teacher
      teacher = new Teacher({
        email: req.body.email,
        password: hashedPassword,
      });
      await teacher.save();

      // Generate token
      const token = AuthMiddleware.generateToken(teacher);

      // Send response
      res.status(200).send({ token });
    } catch (error) {
      res.status(500).send('Server error');
    }
  }

  async login(req, res) {
    try {
      // Validate request data
      if (!req.body.email || !req.body.password) {
        return res.status(400).send('Missing email or password');
      }

      // Check if teacher exists
      const teacher = await Teacher.findOne({ email: req.body.email });
      if (!teacher) {
        return res.status(400).send('Teacher does not exist');
      }

      // Compare password
      const isMatch = PasswordService.comparePassword(req.body.password, teacher.password);
      if (!isMatch) {
        return res.status(400).send('Invalid password');
      }

      // Generate token
      const token = AuthMiddleware.generateToken(teacher);

      // Send response
      res.status(200).send({ token });
    } catch (error) {
      res.status(500).send('Server error');
    }
  }
}

module.exports = new TeacherController();
