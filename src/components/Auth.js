import axios from 'axios';

const Auth = {
  async register(email, password) {
    const response = await axios.post('/api/register', { email, password });
    localStorage.setItem('token', response.data.token);
  },

  async login(email, password) {
    const response = await axios.post('/api/login', { email, password });
    localStorage.setItem('token', response.data.token);
  },

  logout() {
    localStorage.removeItem('token');
  },

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
};

export default Auth;
