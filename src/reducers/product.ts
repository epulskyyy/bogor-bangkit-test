import * as productAction from "../actions/product";

const initialState = {
  data: null,
  dataCount: null,
  dataId: {},
  dataHits: [],
  isLoading: null,
  isError: null,
  message: null,
  dataSearch: null,
  isLoadingSearch: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case productAction.GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case productAction.GET_PRODUCT_SUCCESS:
      return { ...state, data: action.data, isLoading: null };
    case productAction.GET_PRODUCT_ERROR:
      return {
        ...state,
        data: null,
        isLoading: null,
      };
    case productAction.GET_PRODUCT_SEARCH_REQUEST:
      return {
        ...state,
        isLoadingSearch: true,
      };
    case productAction.GET_PRODUCT_SEARCH_SUCCESS:
      return { ...state, dataSearch: action.data, isLoadingSearch: null };
    case productAction.GET_PRODUCT_SEARCH_ERROR:
      return {
        ...state,
        dataSearch: null,
        isLoadingSerach: null,
      };

    case productAction.GET_PRODUCT_BY_COUNT_REQUEST:
      return {
        ...state,
        dataCount: null,
        isLoading: true,
      };
    case productAction.GET_PRODUCT_BY_COUNT_SUCCESS:
      return { ...state, dataCount: action.data, isLoading: true };
    case productAction.GET_PRODUCT_BY_COUNT_ERROR:
      return {
        ...state,
        dataCount: null,
        isLoading: false,
      };
    case productAction.GET_PRODUCT_BY_HITS_REQUEST:
      return {
        ...state,
        dataCount: null,
        isLoading: true,
      };
    case productAction.GET_PRODUCT_BY_HITS_SUCCESS:
      return { ...state, dataHits: action.data, isLoading: true };
    case productAction.GET_PRODUCT_BY_HITS_ERROR:
      return {
        ...state,
        dataCount: null,
        isLoading: false,
      };
    case productAction.GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        dataId: null,
        isLoading: true,
      };
    case productAction.GET_PRODUCT_BY_ID_SUCCESS:
      return { ...state, dataId: action.data, isLoading: false };
    case productAction.GET_PRODUCT_BY_ID_ERROR:
      return {
        ...state,
        dataId: null,
        isLoading: false,
      };
    case productAction.POST_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case productAction.POST_PRODUCT_SUCCESS:
      return { ...state, data: action.data, isLoading: false };
    case productAction.POST_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
