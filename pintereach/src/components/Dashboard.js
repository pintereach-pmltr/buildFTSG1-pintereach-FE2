import React from "react";
import { NavLink, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, getBoards } from '../actions'
import ArticleForm from "./ArticleForm";

class Dashboard extends React.Component {
  state = {};

  componentDidMount(id) {
    this.props.getBoards(id = 1);
    console.log(id)

}

  logout = event => {
      event.preventDefault();
      this.props.logout()
  }

  render() {
    return (
      <div>
        <div className="navbar">
        <div className='logo-box'>
            {" "}
            <i className="fas fa-bookmark"></i>
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
        <div>
            {this.props.boards.map(board => {
                return (
                    <Link to ={`/dashboard/${board.id}`} key={board.id}>
                        <div>
                            <h1>{board.board_title}</h1>
                        </div>
                    </Link>
                )
            })}
        </div>
        <ArticleForm />

      </div>
    );
  }
}

const mapStateToProps = state => ({
    isLoggingOut: state.isLoggingOut,
    boards: state.boards
})

export default connect(mapStateToProps, { logout, getBoards }) (Dashboard);
