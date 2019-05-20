import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/LoginPage";
// import RegisterPage from './components/RegisterPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={LoginPage} />
        {/* <Route path='/register' component={RegisterPage} /> */}
      </div>
    </Router>
  );
}

export default App;
