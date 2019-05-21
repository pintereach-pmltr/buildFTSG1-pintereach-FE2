import React from "react";
import { connect } from "react-redux";
import { postArticles } from '../actions'

class ArticleForm extends React.Component {
    state = {
        articles: {
            id: '',
            article_label: '',
            url: ''
        }
    }

addArticle = event => {
    event.preventDefault();
    if (!this.state.articles) return;
    this.props.postArticles(this.state.articles);
    this.setState({
        articles: {
            id: '',
            article_label: '', 
            url: ''
        }
    })
}

handleChanges = event => {
    this.setState({
        articles: {
            ...this.state.friend,
            [event.target.name]: event.target.value
        }
    })
}

  render() {
    return (
      <div className='form-container'>
        <form className='friend-form' onSubmit={this.addArticle}>
          <input required placeholder='Title' name='article_label' value={this.state.articles.article_label} onChange={this.handleChanges}/>
          <input required placeholder='Url' name='url' value={this.state.articles.url} onChange={this.handleChanges}/>
          <button>Add Article</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    postingArticles: state.postingArticles,
})

export default connect(
  mapStateToProps,
  { postArticles }
)(ArticleForm);