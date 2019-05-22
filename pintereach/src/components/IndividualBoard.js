import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getArticles, getBoards, postArticle, logout } from "../actions";
import ArticleForm from "./ArticleForm";

class IndividualBoard extends React.Component {
  componentDidMount() {
    let pathname = this.props.location.pathname;
    let pathArray = pathname.replace(/\D/g, "");
    // const user_id = localStorage.getItem("user id");
    this.props.getArticles(pathArray);
  }
  logout = () => {
      this.props.logout();
  }

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
            console.log(article.url);
            return (
              <div className="ind-article" key={article.id}>
                <a className="ind-link" href={article.url} target="_blank">
                  <i class="fas fa-newspaper" id="article-icon" />
                  <h1 className="article-title">{article.article_label}</h1>
                </a>
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
  { getArticles, getBoards, postArticle, logout }
)(IndividualBoard);
