import React, { Component } from 'react'
import { getUserInfo } from "../actions";

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: localStorage.getItem('user_id')
        }
    }

    componentDidMount(){
        this.props.getUserInfo(this.state.user_id)
    }

    render() {
        return (
            <div>
                {this.props.user_info.first_name}
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
