import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/index";
import { NavLink } from "react-router-dom";

class LoginPage extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
        this.props.history.push('/dashboard/all')
    })
  };

  render() {
    return (
      <div className="login-container">
        <div className="navbar">
          <div className='logo-box'>
            {" "}
            <i className="fas fa-bookmark"></i>
            <div className="logo">
              <h1>Pintereach</h1>
            </div>
          </div>

          <div>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
            <NavLink className="nav-link" to="/dashboard/all">
              Dashboard
            </NavLink>
          </div>
        </div>
        <form className="login-form" onSubmit={this.login}>
          <h1>Log In to Pintereach</h1>
          <input name='username' value={this.state.credentials.username} onChange={this.handleChanges} placeholder="Username" />
          <input name='password' value={this.state.credentials.password} onChange={this.handleChanges}  placeholder="Password" />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
