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
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: LOGIN_FAIL})
    })
}
