import * as userAction from "../actions/user";

const initialState = {
  data: {},
  datas: null,
  isLoading: false,
  dataInfinite: null,
  isLoadingInfinite: false,
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
    case userAction.GET_ALL_USER_REQUEST:
      return {
        ...state,
        datas: null,
        isLoading: true,
      };
    case userAction.GET_ALL_USER_SUCCESS:
      return { ...state, datas: action.data, isLoading: false };
    case userAction.GET_ALL_USER_ERROR:
      return {
        ...state,
        datas: null,
        isLoading: false,
      };
    case userAction.GET_ALL_USER_INFINITE_REQUEST:
      return {
        ...state,
        isLoadingInfinite: true,
      };
    case userAction.GET_ALL_USER_INFINITE_SUCCESS:
      let dtInfinite: any = action.data;
      const dtNow: any = action.dataCurrent;
      if (dtNow != null) {
        dtInfinite = {
          ...dtInfinite,
          data: {
            ...dtInfinite.data,
            data: [...dtNow, ...dtInfinite?.data?.data],
          },
        };
      }
      return { ...state, dataInfinite: dtInfinite, isLoadingInfinite: false };
    case userAction.GET_ALL_USER_INFINITE_ERROR:
      return {
        ...state,
        dataInfinite: null,
        isLoadingInfinite: false,
      };
    default:
      return state;
  }
}
