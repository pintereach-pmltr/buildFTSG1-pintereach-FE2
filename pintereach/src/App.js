import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
  <Route path='/login' component={LoginPage} />
    </div>
  );
}

export default App;
