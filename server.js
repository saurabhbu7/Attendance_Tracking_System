const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // TODO: Replace with real authentication logic
  if (email === 'test@test.com' && password === 'password') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
