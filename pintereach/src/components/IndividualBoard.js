import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getArticles, getBoards, postArticle } from "../actions";
import ArticleForm from "./ArticleForm";

class IndividualBoard extends React.Component {

  componentDidMount() {
    const user_id = localStorage.getItem("user id");
    this.props.getArticles(user_id);
  }

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
        </div>
        <div>stuff</div>
        <ArticleForm />
        <div>
          {this.props.articles.map(article => {
            return (
              <div>
                <a href={article.url} target="_blank">
                  <h1>{article.article_label}</h1>
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
  { getArticles, getBoards, postArticle }
)(IndividualBoard);
