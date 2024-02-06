import React, { Component } from 'react';
import axios from 'axios';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.loginUser();
  }

  loginUser = () => {
    axios.post('/api/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      localStorage.setItem('jwt', response.data.jwt);
      this.props.history.push('/dashboard');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="email" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
