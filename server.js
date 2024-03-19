const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'attendance_tracking_system'
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.redirect('/home');
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
