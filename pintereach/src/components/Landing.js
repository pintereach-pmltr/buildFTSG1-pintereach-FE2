import React from "react";
import { Link } from 'react-router-dom';
import '../landing.css'
import webview from './webview.png'

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
        <div className='landing-content'>
            
            <h1 className='landing-header-title'>Welcome to Pintereach!</h1>
           
            <p className='pg-copy'> Pintereach is a place for you to curate internet articles so you can easily access and share them at any time.</p>
            <div className='button-box'>
            <Link to='/login' className='landing-login'>Log In</Link>
            <Link to='/register' className='landing-register'>Register</Link>
            </div>
            <img className='webview' src={webview} alt='pintereach web view'></img>
        </div>
      </div>
    );
  }
}

export default LandingPage;
