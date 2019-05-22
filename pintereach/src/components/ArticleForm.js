import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getArticles, getBoards, postArticle } from "../actions";

class IndividualBoard extends React.Component {
  state = {
    articles: {
      article_label: "",
      url: "",
      board_id: ""
    }
  };

  componentDidMount() {
    const user_id = localStorage.getItem("user id");
    this.props.getArticles(user_id);
  }

  addArticle = event => {
    const user_id = localStorage.getItem("user id");
    event.preventDefault();
    this.props.postArticle(this.state.articles);
    this.props.getArticles(user_id);
    this.setState({
      articles: {
        article_label: "",
        url: "",
        board_id: ""
      }
    });
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
    return (
      <div>
        <form onSubmit={this.addArticle}>
          <input
            required
            placeholder="Article Title"
            name="article_label"
            value={this.state.articles.article_label}
            onChange={this.handleChanges}
          />
          <input
            required
            placeholder="Article URL"
            name="url"
            value={this.state.articles.url}
            onChange={this.handleChanges}
          />
          <input
            required
            placeholder="Board ID"
            name="board_id"
            value={this.state.articles.board_id}
            onChange={this.handleChanges}
          />
          <button>addArticle</button>
        </form>
        <div>
          {this.props.articles.map(article => {
            return (
              <div>
                <h1>{article.article_label}</h1>
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
  // isLoggingOut: state.isLoggingOut,
  articles: state.articles,
  fetchingArticles: state.fetchingArticles
});

export default connect(
  mapStateToProps,
  { getArticles, getBoards, postArticle }
)(IndividualBoard);
