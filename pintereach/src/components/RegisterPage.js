import React from 'react';
import { connect } from 'react-redux'
import { register } from '../actions/index'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar.js'

class LoginPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: ''
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
            <NavBar />
            <form className='login-form' onSubmit={this.register}>
            <h1>Register for Pintereach</h1> 
              <input placeholder='Username' name='username' required value={this.state.credentials.username} onChange={this.handleChanges} />
              <input placeholder='Password' name='password' required type="password" value={this.state.credentials.password} onChange={this.handleChanges}/>
              <input placeholder='First Name' name='first_name' required value={this.state.credentials.first_name} onChange={this.handleChanges} />
              <input placeholder='Last Name' name='last_name' required type="last_name" value={this.state.credentials.last_name} onChange={this.handleChanges}/>
              <input placeholder='Email' name='email' required value={this.state.credentials.email} onChange={this.handleChanges} />
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
  