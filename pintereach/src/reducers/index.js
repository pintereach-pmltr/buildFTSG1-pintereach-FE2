import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";

const initialState = {
  boards: [],
  fetchingArticles: false,
  isLoggingIn: false,
  error: "",
  addingArticles: false
};

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
    default:
      return state;
  }
};
