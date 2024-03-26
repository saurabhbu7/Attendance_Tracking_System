const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserController = require('./UserController');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/Attendance_Tracking_System', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/register', UserController.register);
app.post('/login', UserController.login);

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
