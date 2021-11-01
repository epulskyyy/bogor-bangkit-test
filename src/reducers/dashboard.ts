import {
  CHART_DASHBOARD_ERROR,
  CHART_DASHBOARD_REQUEST,
  CHART_DASHBOARD_SUCCESS,
  SET_STATE_DASHBOARD,
  VISIT_COUNT_ERROR,
  VISIT_COUNT_REQUEST,
  VISIT_COUNT_SUCCESS,
} from "../actions/dashboard";

const initialState = {
  visitCount: {},
  chart: {},
  isLoading: null,
  isLoadingChart: null,
  isError: null,
  message: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_STATE_DASHBOARD:
      return {
        ...state,
        visitCount: { ...state.visitCount, [action.name]: action.value },
      };

    case VISIT_COUNT_REQUEST:
      return { ...state, isLoading: true };

    case VISIT_COUNT_SUCCESS:
      return {
        ...state,
        visitCount: action.data,
        isLoading: false,
      };

    case VISIT_COUNT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.message,
      };

    case CHART_DASHBOARD_REQUEST:
      return { ...state, isLoadingChart: true };

    case CHART_DASHBOARD_SUCCESS:
      return {
        ...state,
        chart: action.data,
        isLoadingChart: false,
      };

    case CHART_DASHBOARD_ERROR:
      return {
        ...state,
        isLoadingChart: false,
        isError: true,
        message: action.message,
      };
    default:
      return state;
  }
}
