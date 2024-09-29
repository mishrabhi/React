import { LOGIN, LOGOUT } from "./actions/authAction";
import {
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  UPDATE_SCORE,
} from "./actions/quizAction";

const initialState = {
  isAuthenticated: false,
  loading: false,
  quizData: [],
  error: "",
  score: 0,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

//quizReducer

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_REQUEST:
      return { ...state, loading: true };
    case FETCH_QUIZ_SUCCESS:
      return { ...state, loading: false, quizData: action.payload, error: "" };
    case FETCH_QUIZ_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_SCORE:
      return { ...state, score: state.score + action.payload };
    default:
      return state;
  }
};

export default { authReducer, quizReducer };
