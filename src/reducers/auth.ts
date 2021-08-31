import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_FORM_AUTH,
} from "../actions/auth";

const initialState = {
  formData: {},
  isLoading: null,
  isError: null,
  message: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FORM_AUTH:
      return {
        ...state,
        formData: { ...state.formData, [action.name]: action.value },
      };

    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        formData: {},
        isLoading: false,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.message,
      };
    default:
      return state;
  }
};
