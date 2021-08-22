import {
    REGISTRATION_ERROR,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  SET_FORM_REGISTER,
  SET_FORM_STAPS,
} from "../actions/register";

const initialState = {
  data: {},
  formData: {},
  staps: {
    current: 0,
    percent: 0,
  },
  isFetching: null,
  isLoading: null,
  isError: null,
  message: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_FORM_REGISTER:
      return {
        ...state,
        formData: { ...state.formData, [action.name]: action.value },
      };
    case SET_FORM_STAPS:
      return {
        ...state,
        staps: { ...state.staps, [action.name]: action.value },
      };

    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
      case REGISTRATION_ERROR:
        return {
          ...state,
          isLoading: false,
          message: action.message
        };
    default:
      return state;
  }
}
