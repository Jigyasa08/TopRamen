import {
  RESTAURANT_GET_REQUEST,
  RESTAURANT_GET_SUCCESS,
  RESTAURANT_GET_FAILURE,
  RESTAURANT_FILTER_REQUEST,
  RESTAURANT_FILTER_SUCCESS,
  RESTAURANT_FILTER_FAILURE,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  data: [],
};

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
    case RESTAURANT_FILTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case RESTAURANT_FILTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case RESTAURANT_FILTER_FAILURE: {
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
