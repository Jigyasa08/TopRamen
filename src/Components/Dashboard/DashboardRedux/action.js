import axios from "axios";
import {
  RESTAURANT_GET_REQUEST,
  RESTAURANT_GET_SUCCESS,
  RESTAURANT_GET_FAILURE,
} from "./actionTypes";

export const restaurantGetRequest = () => {
  return {
    type: RESTAURANT_GET_REQUEST,
  };
};

export const restaurantGetSuccess = (payload) => {
  return {
    type: RESTAURANT_GET_SUCCESS,
    payload,
  };
};

export const restaurantGetFailure = () => {
  return {
    type: RESTAURANT_GET_FAILURE,
  };
};

export const getRestaurantDetails = (param, value) => (dispatch) => {
  dispatch(restaurantGetRequest());

  axios({
    method: "GET",
    url: `https://serverfake.herokuapp.com/topRamen?${param}=${value}`,
  })
    .then((res) => dispatch(restaurantGetSuccess(res.data)))
    .catch((err) => dispatch(restaurantGetFailure(err)));
};
