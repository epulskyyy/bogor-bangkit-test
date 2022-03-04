import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_FORM_AUTH,
  SET_STATE_AUTH,
  LOGIN_ADMIN_SUCCESS,
} from "../actions/auth";

const initialState = {
  formData: {},
  authedData: null,
  authedDataAdmin: null,
  isLoading: null,
  isError: null,
  message: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_STATE_AUTH:
      return {
        ...state,
        [action.name]: action.value,
      };
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
        authedData: action.data,
        isLoading: false,
      };

    case LOGIN_ADMIN_SUCCESS:
      return {
        ...state,
        authedDataAdmin: action.data,
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
}
