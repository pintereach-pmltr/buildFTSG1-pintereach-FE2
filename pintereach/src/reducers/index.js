import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "../actions";
import { statement } from "@babel/template";

const initialState = {
  boards: [],
  fetchingArticles: false,
  isLoggingIn: false,
  error: "",
  addingArticles: false,
  isRegistering: false
};
initialState.boards = [
    {
      id: 1,
      name: 'Ben',
      age: 30,
      email: 'ben@lambdaschool.com'
    },
    {
      id: 2,
      name: 'Austen',
      age: 45,
      email: 'austen@lambdaschool.com'
    },
    {
      id: 3,
      name: 'Ryan',
      age: 15,
      email: 'ryan@lambdaschool.com'
    },
    {
      id: 4,
      name: 'Dustin',
      age: 25,
      email: 'D-munny@lambdaschool.com'
    },
    {
      id: 5,
      name: 'Sean',
      age: 35,
      email: 'sean@lambdaschool.com'
    },
    {
      id: 6,
      name: 'Michelle',
      age: 67,
      email: 'michelle@gmail.com'
    }
  ];

export const rootReducer = (state = initialState, action) => {
  // console.log(action.payload)
  // console.log(action.type)
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoggingIn: false
      };
    case REGISTER_START:
    return {
        ...state,
        isRegistering: true
    }
    case REGISTER_SUCCESS:
    return {
        ...state,
        isRegistering: false
    }
    case REGISTER_FAIL:
    return {
        ...state,
        error: action.payload
    }
    default:
      return state;
  }
};
