import * as userAction from "../actions/user";

const initialState = {
  data: {},
  isLoading: null,
  isError: null,
  message: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case userAction.GET_USER_BY_ID_REQUEST:
      return {
        ...state,
        data: {},
        isLoading: true,
      };
    case userAction.GET_USER_BY_ID_SUCCESS:
      return { ...state, data: action.data, isLoading: false };
    case userAction.GET_USER_BY_ID_ERROR:
      return {
        ...state,
        data: {},
        isLoading: false,
      };
    default:
      return state;
  }
};
