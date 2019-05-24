import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  getArticles,
  getBoards,
  postArticle,
  logout,
  deleteArticle,
  editArticle
} from "../actions";
import ArticleForm from "./ArticleForm";
import EditArticle from "./EditArticle";
import NavBar from "./NavBar";

class IndividualBoard extends React.Component {
  state = {
    editingArticleID: null,
    editingArticle: null
  };
  componentDidMount() {
    let pathname = this.props.location.pathname;
    let pathArray = pathname.replace(/\D/g, "");
    // const user_id = localStorage.getItem("user id");
    this.props.getArticles(pathArray);
  }
  logout = () => {
    this.props.logout();
  };

  deleteArticle = id => {
    let pathname = this.props.location.pathname;
    let pathArray = pathname.replace(/\D/g, "").then(() =>{
      return     this.props.getArticles(pathArray);
    })
    this.props.deleteArticle(id);

  };

  editArticle = (event, article) => {
    event.preventDefault();
    this.props
      .editArticle(article)
      .then(() => this.setState({ editingArticleID: null }));
  };

  render() {
    //fetch location prop from router
    //set location to pathname variable
    //extract all non-digit characters
    //past down to articleform
    console.log(this.props.location);
    let pathname = this.props.location.pathname;
    console.log(pathname);
    let pathArray = pathname.replace(/\D/g, "");
    console.log(pathArray);
    return (
      <div className="ind-board-container">
        <NavBar />
        <div className="sub-nav-bar-article">
          {/* <NavLink className="sub-link" to="/dashboard/all">
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
          </NavLink> */}
          <ArticleForm board_id={pathArray} />
        </div>
        <div className="link-container">
          {this.props.articles.map(article => {
            if (this.state.editingArticleID === article.id) {
              return (
                <EditArticle
                  key={article.id}
                  article={article}
                  editArticle={this.editArticle}
                />
              );
            }
            console.log(article.id);
            return (
              <div className="ind-article" key={article.id}>
                <a
                  className="ind-link"
                  href={`${article.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-newspaper" id="article-icon" />
                  <h1 className="article-title">{article.article_label}</h1>
                </a>
                <i
                  onClick={() =>
                    this.setState({ editingArticleID: article.id })
                  }
                  className="fas fa-pencil-alt"
                  id="pencil-edit"
                />
                <button
                  className="article-delete"
                  onClick={() => this.deleteArticle(article.id)}
                >
                  Delete
                </button>
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
  { getArticles, getBoards, postArticle, logout, deleteArticle, editArticle }
)(IndividualBoard);
