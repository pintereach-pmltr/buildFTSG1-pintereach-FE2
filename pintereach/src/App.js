import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from './components/RegisterPage'
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import IndividualBoard from "./components/IndividualBoard";
import LandingPage from "./components/Landing";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path ='/user' component={UserProfile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route path={`/dashboard/:id`} render={(props) => <IndividualBoard {...props}/>} />
      </div>
    </Router>
  );
}

export default App;
