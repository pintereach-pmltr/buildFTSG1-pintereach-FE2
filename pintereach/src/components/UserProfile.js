import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUserInfo } from "../actions";

class UserProfile extends Component {

    componentDidMount(){
        const curuser = localStorage.getItem('user id')
        this.props.getUserInfo(curuser)
    }

    render() {
        return (
            <div>
                <h2>Welcome {this.props.user_info.first_name} !</h2>
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
