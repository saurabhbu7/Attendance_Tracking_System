import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

function App() {
    return (
        <Router>
            <Route path="/" exact render={() => <Redirect to="/login" />} />
            <Route path="/login" component={LoginPage} />
            <Route path="/home" component={HomePage} />
        </Router>
    );
}

export default App;
