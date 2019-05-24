import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGGING_OUT, 
  FETCH_BOARDS_START,
  FETCH_BOARDS_SUCCESS, 
  FETCH_BOARDS_FAIL,
  POST_BOARDS_START,
  POST_BOARDS_SUCCESS,
  POST_BOARDS_FAIL, 
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL,
  POST_ARTICLES_START,
  POST_ARTICLES_SUCCESS,
  POST_ARTICLES_FAIL,
  DELETE_BOARD_START,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAIL, 
  DELETE_ARTICLE_START,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAIL,
  EDIT_ARTICLE_START,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAIL,
  GET_USER_INFO,
  GET_USER_SUCCESS,
  GET_USER_FAIL
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
  user_id: localStorage.getItem('user_id'),
  deletingBoard: false,
  deletingArticle: false,
  editingArticle: false
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
      case DELETE_BOARD_START:
      return {
          ...state,
          deletingBoard: true
      }
      case DELETE_BOARD_SUCCESS:
      return {
          ...state,
          deletingBoard: false,
          boards: [...state.boards, ...action.payload]
      }
      case DELETE_BOARD_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case DELETE_ARTICLE_START:
      return {
          ...state,
          deletingArticle: true
      }
      case DELETE_ARTICLE_SUCCESS:
      return {
          ...state,
          deletingArticle: false,
          articles: [...state.articles, ...action.payload]
      }
      case DELETE_ARTICLE_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case EDIT_ARTICLE_START:
      return {
          ...state,
          editingArticle: true
      }
      case EDIT_ARTICLE_SUCCESS:
      return {
          ...state,
          editingArticle: false,
          error: '',
          articles: [state.articles, {...action.payload}]
      }
      case EDIT_ARTICLE_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case GET_USER_INFO:
        return {
          ...state
        }
      case GET_USER_SUCCESS:
        return {
          ...state,
          user_info: action.payload
        }
      case GET_USER_FAIL:
        return {
          ...state
        }
    default:
      return state;
  }
};
