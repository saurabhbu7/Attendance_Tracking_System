import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: {email: '', password: ''}
        };
    }

    validateForm() {
        let formErrors = this.state.formErrors;
        let emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formErrors.email = emailValid ? '' : ' is invalid';
        let passwordValid = this.state.password.length >= 6;
        formErrors.password = passwordValid ? '': ' is too short';
        this.setState({formErrors: formErrors});
        return emailValid && passwordValid;
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.validateForm()) {
            const user = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            };
            axios.post('http://localhost:5000/register', user)
            .then(res => {
                console.log(res.data);
                this.props.history.push('/login');
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    render() {
        return (
            // Registration form code here
        );
    }
}

export default Register;
