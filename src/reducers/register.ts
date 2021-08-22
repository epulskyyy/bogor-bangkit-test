import {
  REGISTRATION_ERROR,
  REGISTRATION_OTP_ERROR,
  REGISTRATION_OTP_REQUEST,
  REGISTRATION_OTP_SUCCESS,
  REGISTRATION_REQUEST,
  REGISTRATION_RESET,
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
  isLoadingOtp: null,
  isErrorOtp: null,
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
        isError: true,
        message: action.message,
      };
    case REGISTRATION_OTP_REQUEST:
      return {
        ...state,
        isLoadingOtp: true,
      };

    case REGISTRATION_OTP_SUCCESS:
      return {
        ...state,
        isLoadingOtp: false,
        formData:{}, 
        staps: {
            current: 0,
            percent: 0,
        }
      };
    case REGISTRATION_OTP_ERROR:
      return {
        ...state,
        isLoadingOtp: false,
        isErrorOtp: true,
        message: action.message,
      };
    case REGISTRATION_RESET:
        return {
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
            isLoadingOtp: null,
            isErrorOtp: null,
        };
    default:
      return state;
  }
}
