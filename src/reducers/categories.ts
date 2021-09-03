import {
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "../actions/categories";

const initialState = {
  data: {},
  isLoading: null,
  isError: null,
  message: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        data: {},
      };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, data: action.data, isLoading: true };
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        data: {},
        isLoading: false,
      };
    default:
      return state;
  }
};
