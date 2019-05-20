import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
