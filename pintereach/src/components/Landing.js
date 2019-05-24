import React from "react";
// import { NavLink } from 'react-router-dom';
import '../landing.css'

class LandingPage extends React.Component {
  render() {
    return (
      <div className='landing-container'>
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
            <h1 className='landing-header-title'>Welcome to Pintereach!</h1>
            <p className='pg-copy'> Pintereach is a place for you to curate internet articles so you can easily access and share them at any time.</p>
            <img src='.'></img>
        </div>
      </div>
    );
  }
}

export default LandingPage;
