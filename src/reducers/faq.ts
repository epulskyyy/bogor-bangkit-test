import * as faqAction from "../actions/faq";

const initialState = {
  data: null,
  isLoading: null,
  isError: null,
  message: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case faqAction.GET_FAQ_REQUEST:
      return {
        ...state,
        data: null,
        isLoading: true,
      };
    case faqAction.GET_FAQ_SUCCESS:
      return { ...state, data: action.data, isLoading: false };
    case faqAction.GET_FAQ_ERROR:
      return {
        ...state,
        data: null,
        isLoading: false,
      };
    default:
      return state;
  }
}
