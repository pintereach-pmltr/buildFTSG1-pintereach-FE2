import axios from 'axios';
import { axiosWithAuth }from '../axiosWithAuth'
import { router } from 'sw-toolbox';

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
}

export const FETCH_BOARDS_START = 'FETCH_BOARDS_START'
export const FETCH_BOARDS_SUCCESS= 'FETCH_BOARDS_SUCCESS'
export const FETCH_BOARDS_FAIL= 'FETCH_BOARDS_FAIL'

export const getBoards = id => dispatch => {
    dispatch({ type: FETCH_BOARDS_START })
    axiosWithAuth()
    .get(`https://pintereach0.herokuapp.com/api/boards/${id}`)
    .then(res => {
        debugger;
        console.log(res)
        dispatch({ type: FETCH_BOARDS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const POST_ARTICLES_START = 'POST_ARTICLES_START'
export const POST_ARTICLES_SUCCESS = 'POST_ARTICLES_SUCCESS'
export const POST_ARTICLES_FAIL = 'POST_ARTICLES_FAIL'

export const postBoard = board => dispatch => {
    dispatch({ type: POST_ARTICLES_START })
    axiosWithAuth()
    .post(`https://pintereach0.herokuapp.com/api/boards/`, board)
    .then (res => {
        console.log(res)
        dispatch({ type: POST_ARTICLES_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: POST_ARTICLES_FAIL })
    })
}