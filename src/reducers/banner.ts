import * as bannerAction from "../actions/banner";

const initialState = {
  data: {},
  isLoading: null,
  isError: null,
  message: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case bannerAction.GET_BANNER_REQUEST:
      return {
        ...state,
        data: {},
        isLoading: true,
      };
    case bannerAction.GET_BANNER_SUCCESS:
      return { ...state, data: action.data, isLoading: true };
    case bannerAction.GET_BANNER_ERROR:
      return {
        ...state,
        data: {},
        isLoading: false,
      };
    default:
      return state;
  }
};
