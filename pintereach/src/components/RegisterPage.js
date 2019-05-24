import React from 'react';
import { connect } from 'react-redux'
import { register } from '../actions/index'
import { NavLink } from 'react-router-dom'

class LoginPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChanges = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    register = event => {
        event.preventDefault();
        this.props.register(this.state.credentials)
    }

    render() {
        return (
          <div className='login-container'>
            <div className="navbar">
            <div className='logo-box'>
            {" "}
            <i className="fas fa-bookmark"></i>
            <div className="logo">
              <h1>Pintereach</h1>
            </div>
          </div>
              <div>
                <NavLink className="nav-link" exact to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </div>
            </div>
            <form className='login-form' onSubmit={this.register}>
            <h1>Register for Pintereach</h1> 
              <input placeholder='Username' name='username' value={this.state.credentials.username} onChange={this.handleChanges} />
              <input placeholder='Password' name='password' value={this.state.credentials.password} onChange={this.handleChanges}/>
              <button className='register-button'>Register</button>
            </form>
          </div>
        );
      }
    }

const mapStateToProps = state => ({
    isRegistering: state.isRegistering
})

export default connect(
    mapStateToProps,
    { register }
  )(LoginPage);
  