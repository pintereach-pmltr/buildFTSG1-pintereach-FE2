import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

export default class NavBar extends Component {
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
                <NavLink onClick={this.logout} className="nav-link" exact to="/">
                 Log Out
                </NavLink>
                <NavLink className="nav-link" to="/dashboard">
                Dashboard
                </NavLink>
            </div>
            </div>
        )
    }
}
