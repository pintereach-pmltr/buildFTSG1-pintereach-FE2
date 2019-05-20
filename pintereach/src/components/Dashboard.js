import React from "react";
import { NavLink } from "react-router-dom";

class Dashboard extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="navbar">
        <div className='logo-box'>
            {" "}
            <i class="fas fa-bookmark"></i>
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
        <div className="sub-nav-bar">
          <NavLink className='sub-link' to="/dashboard/all">ALL</NavLink>
          <NavLink className='sub-link' to="/dashboard/tech">TECH</NavLink>
          <NavLink className='sub-link' to="/dashboard/science">SCIENCE</NavLink>
          <NavLink className='sub-link' to="/dashboard/sports">SPORTS</NavLink>
          <NavLink className='sub-link' to="/dashboard/entertainment">ENTERTAINMENT</NavLink>
        </div>
      </div>
    );
  }
}

export default Dashboard;
