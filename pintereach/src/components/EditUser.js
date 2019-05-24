import React from 'react';
import { connect } from 'react-redux'
import { editUser } from '../actions/index'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar.js'

class EditUser extends React.Component {
    state = {
        credentials: {
            first_name: this.props.user_info.first_name,
            last_name: this.props.user_info.last_name,
            email: this.props.user_info.email,
            id: localStorage.getItem('user id')
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

    editUser = event => {
        event.preventDefault();
        this.props.editUser(this.state.credentials)
    }

    render() {
        return (
          <div className='login-container'>
            <NavBar />
            <form className='login-form' onSubmit={this.editUser}>
            <h1>Edit User</h1> 
              <input placeholder='First Name' name='first_name' required value={this.state.credentials.first_name} onChange={this.handleChanges} />
              <input placeholder='Last Name' name='last_name' required type="last_name" value={this.state.credentials.last_name} onChange={this.handleChanges}/>
              <input placeholder='Email' name='email' required value={this.state.credentials.email} onChange={this.handleChanges} />
              <button className='register-button'>Submit Changes</button>
            </form>
          </div>
        );
      }
    }

const mapStateToProps = state => ({
    user_info: state.user_info,
    isEditing: state.isEditing
})

export default connect(
    mapStateToProps,
    { editUser }
  )(EditUser);
  