import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUserInfo } from "../actions";
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
                <div className="profileStuff">
                    <div className="proentry">
                        <h2>First Name: </h2> {this.props.user_info.first_name}
                    </div>
                    <div className="proentry">
                    	<h2>Last Name: </h2> {this.props.user_info.last_name}
                    </div>
                    <div className="proentry">
                    	<h2>Email: </h2> {this.props.user_info.email}
                    </div>
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
