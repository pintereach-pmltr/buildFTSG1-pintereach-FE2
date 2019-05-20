import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/index";
import { Link } from "react-router-dom";

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
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div className='login-container'>
        <div className="navbar">
          <div className="logo">
            <h1>Pintereach</h1>
          </div>
          <div>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </div>
        </div>
        <form className='login-form'> 
          <input placeholder='Username' />
          <input placeholder='Password'/>
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
