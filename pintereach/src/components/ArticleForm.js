import React from "react";
import { connect } from "react-redux";
import { postBoard, getBoards } from "../actions";

class ArticleForm extends React.Component {
  state = {
    boards: {
      id: "",
      board_title: "",
      user_id: localStorage.getItem('user id')
    }
  };

  addBoard = event => {
    const user_id = localStorage.getItem('user id')
    event.preventDefault();
    if (!this.state.boards) return;
    this.props.postBoard(this.state.boards);
    this.props.getBoards(user_id);
    this.setState({
      boards: {
        board_title: "",
        user_id: user_id
      }
    });
  };

  handleChanges = event => {
    this.setState({
      boards: {
        ...this.state.boards,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <div className="form-container">
        <form className="friend-form" onSubmit={this.addBoard}>
          <input
            required
            placeholder="Board Title"
            name="board_title"
            value={this.state.boards.board_title}
            onChange={this.handleChanges}
          />
          <button>Add Board</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postingBoards: state.postingBoards
});

export default connect(
  mapStateToProps,
  { postBoard, getBoards }
)(ArticleForm);
