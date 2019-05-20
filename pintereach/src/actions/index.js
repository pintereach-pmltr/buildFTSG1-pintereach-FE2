import axios from 'axios';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post(`/login`, creds)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data);
        dispatch({ type: LOGIN_SUCCESS, payload: res.datta.payload })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: LOGIN_FAIL })
    })
}

