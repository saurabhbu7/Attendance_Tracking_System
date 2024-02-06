import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      {/* Add other routes here */}
    </Router>
  );
}

export default App;
