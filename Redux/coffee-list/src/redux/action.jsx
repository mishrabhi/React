import axios from "axios";

export const fetchCoffee = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_COFFEE_REQUEST" });
    try {
      const response = await axios.get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"
      );
      dispatch({
        type: "FETCH_COFFEE_SUCCESS",
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_COFFEE_FAILURE", payload: error.message });
    }
  };
};
