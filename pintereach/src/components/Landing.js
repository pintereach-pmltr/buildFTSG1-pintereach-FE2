import React from "react";
import { NavLink } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="logo-box">
            {" "}
            <i className="fas fa-bookmark" />
            <div className="logo">
              <h1>Pintereach</h1>
            </div>
          </div>


        </div>
        <div>
            <h1 className='landing-header'>Welcome to Pintereach!</h1>
        </div>
      </div>
    );
  }
}

export default LandingPage;
