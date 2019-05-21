import React from "react";
import { NavLink, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, getBoards } from "../actions";
import ArticleForm from "./ArticleForm";

class Dashboard extends React.Component {


  componentDidMount(id) {
    this.props.getBoards((5));
    console.log(id);
  }
//   componentWillReceiveProps(nextProps) {
//     if (this.state.boards !== nextProps.boards) {
//       this.setState({
//         boards: nextProps.boards
//       });
//     }
//   }

  logout = event => {
    event.preventDefault();
    this.props.logout();
  };

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
          {/* {this.props.fetchingBoards ? <h1>Loading boards...</h1> : null } */}
          {this.props.boards.map(board => {
            return (
              <Link to={`/dashboard/${board.id}`} key={board.id}>
                <div>
                  <h1>{board.board_title}</h1>
                </div>
              </Link>
            );
          })}
        </div>
        <ArticleForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingOut: state.isLoggingOut,
  boards: state.boards,
  fetchingBoards: state.fetchingBoards
});

export default connect(
  mapStateToProps,
  { logout, getBoards }
)(Dashboard);
