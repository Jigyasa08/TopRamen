import {
  RESTAURANT_GET_REQUEST,
  RESTAURANT_GET_SUCCESS,
  RESTAURANT_GET_FAILURE,
} from "./actionTypes";

//Redux State
const initState = {
  isLoading: false,
  isError: false,
  data: [],
};

//Redux Reducer
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case RESTAURANT_GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case RESTAURANT_GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case RESTAURANT_GET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
