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
  POST_BOARDS_FAIL, 
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL,
  POST_ARTICLES_START,
  POST_ARTICLES_SUCCESS,
  POST_ARTICLES_FAIL
} from "../actions";

const initialState = {
  boards: [],
  articles: [],
  fetchingArticles: false,
  fetchingBoards: false,
  isLoggingIn: false,
  error: "",
  postingArticles: false,
  isRegistering: false,
  isLoggingOutl: false,
  postingBoards: false,
  user_id: localStorage.getItem('user_id')
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
          postingBoards: true,
      }
      case POST_BOARDS_SUCCESS:
      return {
          ...state,
          postingBoards: false,
          boards: [...state.boards, {...action.payload}]
      }
      case POST_BOARDS_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case FETCH_ARTICLES_START:
      return {
          ...state,
          fetchingArticles: true
      }
      case FETCH_ARTICLES_SUCCESS:
      return {
          ...state, 
          fetchingArticles: false,
          articles: action.payload
      }
      case FETCH_ARTICLES_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case POST_ARTICLES_START:
      return {
          ...state,
          postingArticles: true
      }
      case POST_ARTICLES_SUCCESS:
      return {
          ...state,
          postingArticles: false,
          articles: [...state.articles, {...action.payload}]
      }
      case POST_ARTICLES_FAIL:
      return {
          ...state,
          error: action.payload
      }
    default:
      return state;
  }
};
