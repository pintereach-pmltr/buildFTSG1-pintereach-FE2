import axios from 'axios';
import { axiosWithAuth }from '../axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post(`https://pintereach0.herokuapp.com/api/auth/login`, creds)
    .then(res => {
        // debugger;
        console.log(res)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user id', res.data.id)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: LOGIN_FAIL})
    })
}

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'


export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START })
    axiosWithAuth()
    .post(`https://pintereach0.herokuapp.com/api/auth/register`, creds)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user id', res.data.id)
        console.log(res.data.id)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
    })
    .catch(err => {
        console.log(err) 
        dispatch({ type: REGISTER_FAIL })
    })
}

export const LOGGING_OUT = 'LOGGING_OUT'

export const logout = () => dispatch => {
    dispatch({ type: LOGGING_OUT })
    localStorage.removeItem('token');
    localStorage.removeItem('user id')
}

export const FETCH_BOARDS_START = 'FETCH_BOARDS_START'
export const FETCH_BOARDS_SUCCESS= 'FETCH_BOARDS_SUCCESS'
export const FETCH_BOARDS_FAIL= 'FETCH_BOARDS_FAIL'

export const getBoards = id => dispatch => {
    dispatch({ type: FETCH_BOARDS_START })
    axiosWithAuth()
    .get(`https://pintereach0.herokuapp.com/api/boards/${id}`)
    .then(res => {
        // debugger;
        console.log(res)
        dispatch({ type: FETCH_BOARDS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const POST_BOARDS_START = 'POST_BOARDS_START'
export const POST_BOARDS_SUCCESS = 'POST_BOARDS_SUCCESS'
export const POST_BOARDS_FAIL = 'POST_BOARDS_FAIL'

export const postBoard = (board) => dispatch => {
    dispatch({ type: POST_BOARDS_START })
    // console.log(id)
    console.log(board)
    axiosWithAuth()
    .post(`https://pintereach0.herokuapp.com/api/boards/`, board)
    .then (res => {
        // debugger;
        console.log(res)
        dispatch({ type: POST_BOARDS_SUCCESS, payload: res.data})
        // this.getBoards(id = 1)
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: POST_BOARDS_FAIL })
    })
}

export const FETCH_ARTICLES_START = 'FETCH_ARTICLES_START'
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'
export const FETCH_ARTICLES_FAIL = 'FETCH_ARTICLES_FAIL'

export const getArticles = id => dispatch => {
    dispatch({ type: FETCH_ARTICLES_START })
    axiosWithAuth()
    .get(`https://pintereach0.herokuapp.com/api/articles/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
}

export const POST_ARTICLES_START = 'POST_ARTICLES_START'
export const POST_ARTICLES_SUCCESS = 'POST_ARTICLES_SUCCESS'
export const POST_ARTICLES_FAIL = 'POST_ARTICLES_FAIL'

export const postArticle = article => dispatch => {
    dispatch({ type: POST_ARTICLES_START })
    axiosWithAuth()
    .post(`https://pintereach0.herokuapp.com/api/articles/`, article)
    .then(res => {
        console.log(res)
        dispatch({ type: POST_ARTICLES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: POST_ARTICLES_FAIL })
    })
}

export const DELETE_BOARD_START = 'DELETE_BOARD_START'
export const DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS'
export const DELETE_BOARD_FAIL = 'DELETE_BOARD_FAIL'

export const deleteBoard = id => dispatch => {
    dispatch({ type: DELETE_BOARD_START })
    axiosWithAuth()
    .delete(`https://pintereach0.herokuapp.com/api/boards/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: DELETE_BOARD_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: DELETE_BOARD_FAIL })
    })
}

export const DELETE_ARTICLE_START = 'DELETE_ARTICLE_START'
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS'
export const DELETE_ARTICLE_FAIL = 'DELETE_ARTICLE_FAIL'

export const deleteArticle = id => dispatch => {
    dispatch({ type: DELETE_ARTICLE_START })
    axiosWithAuth()
    .delete(`https://pintereach0.herokuapp.com/api/articles/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: DELETE_ARTICLE_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err) 
        dispatch({ type: DELETE_ARTICLE_FAIL })
    })
}

export const EDIT_ARTICLE_START = 'EDIT_ARTICLE_START'
export const EDIT_ARTICLE_SUCCESS = 'EDIT_ARTICLE_SUCCESS'
export const EDIT_ARTICLE_FAIL = 'EDIT_ARTICLE_FAIL'

export const editArticle = article => dispatch => {
    dispatch ({ type: EDIT_ARTICLE_START })
    axiosWithAuth()
    .put(`https://pintereach0.herokuapp.com/api/articles/${article.id}`, article)
    .then(res=> {
        debugger;
        console.log(res)
        dispatch({ type: EDIT_ARTICLE_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: EDIT_ARTICLE_FAIL })
    })
}


export const GET_USER_INFO = 'GET_USER_INFO'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_USER_FAIL'

export const getUserInfo = user => dispatch => {
    dispatch({ type: GET_USER_INFO })
    axiosWithAuth()
    .get(`http://pintereach0.herokuapp.com/api/users/${user}`)
    .then(res => {
        dispatch({ type: GET_USER_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: GET_USER_FAIL })
        console.log(err)
    })
}