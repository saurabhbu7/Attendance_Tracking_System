import axios from 'axios';

export async function login(email, password) {
  const response = await axios.post('/api/login', { email, password });
  return response;
}
