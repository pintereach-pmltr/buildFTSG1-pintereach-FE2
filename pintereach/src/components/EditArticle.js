import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getArticles, getBoards, postArticle } from "../actions";


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

//   editArticle = (id) => {
//       debugger;
//       console.log(this.props.editArticle)
//     this.props.editArticle(this.state.articles);
//   };

  handleChanges = event => {
    console.log(this.state.articles)
    this.setState({
      articles: {
        ...this.state.articles,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <div className="article-form-container">
        <form className="article-form">
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
          <button className="article-edit" onClick={() => this.props.editArticle(this.props.article)}>
            {this.props.editingArticle ? (
                'Save Changes'
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
  { getArticles, getBoards, postArticle }
)(EditArticle);
