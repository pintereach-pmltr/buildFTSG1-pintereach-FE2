import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import {
    logout
  } from "../actions";
import { connect } from "react-redux";


class NavBar extends Component {

    flip() {
        if(localStorage.getItem('user id')) {
            return (
                <NavLink onClick={this.logout} className="nav-link" exact to="/">
                Log Out
               </NavLink>
            )
        } else {
            return (
                <NavLink className="nav-link" exact to="/login">
                 Log In
                </NavLink>
            )
        }
    }

    render() {
        return (
                <div className="navbar">
                    <div className="logo-box">
                        {" "}
                        <i className="fas fa-bookmark" />
                            <div className="logo">
                            <h1>Pintereach</h1>
                            </div>
                    </div>

            <div>
                <NavLink className="nav-link" to="/dashboard">
                Dashboard
                </NavLink>
                <NavLink className="nav-link" to="/user">
                Profile
                </NavLink>
                {this.flip()}
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

  });

export default connect(
    mapStateToProps,
    { logout }
  )(NavBar);