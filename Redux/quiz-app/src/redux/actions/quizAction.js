import axios from "axios";

export const FETCH_QUIZ_REQUEST = "FETCH_QUIZ_REQUEST";
export const FETCH_QUIZ_SUCCESS = "FETCH_QUIZ_SUCCESS";
export const FETCH_QUIZ_FAILURE = "FETCH_QUIZ_FAILURE";
export const UPDATE_SCORE = "UPDATE_SCORE";

export const fetchQuiz = () => async (dispatch) => {
  dispatch({ type: FETCH_QUIZ_REQUEST });
  try {
    const response = await axios.get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
    );
    dispatch({ type: FETCH_QUIZ_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_QUIZ_FAILURE, payload: error.message });
  }
};

export const updateScore = (points) => ({
  type: UPDATE_SCORE,
  payload: points,
});
