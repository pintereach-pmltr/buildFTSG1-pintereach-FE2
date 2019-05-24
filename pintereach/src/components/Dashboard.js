import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBoards, deleteBoard } from "../actions";
import BoardForm from "./BoardForm";
import NavBar from "./NavBar";

class Dashboard extends React.Component {
  componentDidMount() {
    const user_id = localStorage.getItem("user id");
    this.props.getBoards(user_id);
    // console.log(id);
  }

  deleteBoard = id => {
    // const user_id = localStorage.getItem("user id");
    this.props.deleteBoard(id)
    // debugger;
    // this.props.getBoards(user_id);
    // console.log(id);
  };

  render() {
    return (
      <div className="dashboard-container">
        <NavBar />
        <div className="form-container">
          <BoardForm />
        </div>
        {/* {this.props.fetchingBoards ? (
          <Loader className='loader' type="ThreeDots" color="#2b2d42" height={50} width={50} />
        ) : null} */}
        <div className="board-container">
          {this.props.boards.map(board => {
            return (
              <div className="ind-board" key={board.id}>
                <Link
                  className="ind-board"
                  to={`/dashboard/${board.id}`}
                  key={board.id}
                >
                  <i className="fas fa-clipboard-list" id="board-icon" />
                  <h1>{board.board_title}</h1>
                </Link>
                {/* <button
                  className="board-delete"
                  to="/dashboard"
                  onClick={() => this.deleteBoard(board.id)}
                >
                  Delete Board
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // ...state,
  isLoggingOut: state.isLoggingOut,
  boards: state.boards,
  fetchingBoards: state.fetchingBoards,
  deletingBoard: state.deletingBoard
});

console.log();

export default connect(
  mapStateToProps,
  { getBoards, deleteBoard }
)(Dashboard);
