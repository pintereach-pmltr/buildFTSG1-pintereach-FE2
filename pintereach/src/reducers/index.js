import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGGING_OUT, 
  FETCH_BOARDS_START,
  FETCH_BOARDS_FAIL,
  FETCH_BOARDS_SUCCESS, 
  POST_BOARDS_START,
  POST_BOARDS_SUCCESS,
  POST_BOARDS_FAIL
} from "../actions";

const initialState = {
  boards: [],
  fetchingArticles: false,
  fetchingBoards: false,
  isLoggingIn: false,
  error: "",
  addingArticles: false,
  isRegistering: false,
  isLoggingOutl: false,
  postingArticles: false,
  user_id: 1
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
    case REGISTER_START:
      return {
        ...state,
        isRegistering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload
      };
      case LOGGING_OUT:
      return {
          ...state,
          isLoggingOut: true
      }
      case FETCH_BOARDS_START: 
      return {
          ...state,
          fetchingBoards: true
      }
      case FETCH_BOARDS_SUCCESS:
      return {
          ...state,
          fetchingBoards: false,
          boards: action.payload
      }
      case FETCH_BOARDS_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case POST_BOARDS_START:
      return {
          ...state,
          postingArticles: true,
      }
      case POST_BOARDS_SUCCESS:
      return {
          ...state,
          postingArticles: false,
          boards: action.payload
      }
      case POST_BOARDS_FAIL:
      return {
          ...state,
          error: action.payload
      }
    default:
      return state;
  }
};
