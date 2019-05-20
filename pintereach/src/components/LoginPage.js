import React from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/index'

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

    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/dashboard')
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input></input>
                    <input></input>
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
})

export default connect(
    mapStateToProps,
    { login }
  )(LoginPage);
  