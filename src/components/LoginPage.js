import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();

    // For simplicity, assume these are the correct credentials
    if (username === 'student' && password === 'password') {
      history.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;