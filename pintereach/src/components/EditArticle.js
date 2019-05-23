import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getArticles, getBoards, postArticle, editArticle } from "../actions";
import Loader from "react-loader-spinner";

class EditArticle extends React.Component {
  state = {
    articles: this.props.article
    // article: this.props.article
    //this.props.article
    //   article_label: "",
    //   url: "",
    //set board_id to extracted location number (from individualboard component)
    //   board_id: this.props.board_id
  };

  editArticle = event => {
    this.props.editArticle(event, this.state.articles);
    // this.props.getArticles(user_id);
  };

  handleChanges = event => {
    this.setState({
      articles: {
        ...this.state.articles,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    console.log(this.props.board_id);
    return (
      <div className="article-form-container">
        <form onSubmit={this.editArticle} className="article-form">
          <input
            className="article-shown-input-1"
            required
            placeholder="Enter new article title"
            name="article_label"
            value={this.state.articles.article_label}
            onChange={this.handleChanges}
          />
          <div className="divide" />
          <input
            className="article-shown-input"
            required
            placeholder="URL ex: www.google.com"
            name="url"
            value={this.state.articles.url}
            onChange={this.handleChanges}
          />
          <input
            className="article-board-input"
            required
            placeholder="Board ID"
            name="board_id"
            value={this.state.articles.board_id}
            onChange={this.handleChanges}
          />
          <button className="article-edit">
            {this.props.editingArticle ? (
              <Loader
                className="loader"
                type="ThreeDots"
                color="#2b2d42"
                height={20}
                width={20}
              />
            ) : (
              "Save Changes"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // ...state,
  // isLoggingOut: state.isLoggingOut,
  articles: state.articles,
  fetchingArticles: state.fetchingArticles,
  editingArticle: state.editingArticle
});

export default connect(
  mapStateToProps,
  { getArticles, getBoards, postArticle, editArticle }
)(EditArticle);
