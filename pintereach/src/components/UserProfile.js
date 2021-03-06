import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUserInfo } from "../actions";
import { NavLink, Link } from "react-router-dom";
import '../css/profile.css'
import NavBar from './NavBar';
class UserProfile extends Component {

    componentDidMount(){
        const curuser = localStorage.getItem('user id')
        this.props.getUserInfo(curuser)
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="profile-container">
                    <div className="profile-entry">
                        <h4>First Name: </h4><h2>{this.props.user_info.first_name}</h2> 
                    </div>
                    <div className="profile-entry">
                    	<h4>Last Name: </h4> <h2>{this.props.user_info.last_name}</h2>
                    </div>
                    <div className="profile-entry">
                    	<h4>Email: </h4>  <h2>{this.props.user_info.email}</h2>
                    </div>
                    <NavLink exact to="/editUser">
                        <div className="editHold"><button className="editBtn">Edit User</button></div>
                    </NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user_info: state.user_info
  });

export default connect(
    mapStateToProps,
    { getUserInfo }
  )(UserProfile);
