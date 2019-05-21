import React from "react";
import { NavLink } from "react-router-dom";

class IndividualBoard extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="logo-box">
            {" "}
            <i className="fas fa-bookmark" />
            <div className="logo">
              <h1>Pintereach</h1>
            </div>
          </div>
        </div>
        <div className="sub-nav-bar">
          <NavLink className="sub-link" to="/dashboard/all">
            ALL
          </NavLink>
          <NavLink className="sub-link" to="/dashboard/tech">
            TECH
          </NavLink>
          <NavLink className="sub-link" to="/dashboard/science">
            SCIENCE
          </NavLink>
          <NavLink className="sub-link" to="/dashboard/sports">
            SPORTS
          </NavLink>
          <NavLink className="sub-link" to="/dashboard/entertainment">
            ENTERTAINMENT
          </NavLink>
        </div>
      </div>
    );
  }
}

export default IndividualBoard;
