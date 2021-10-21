import * as infoWisataAction from "../actions/infoWisata";

const initialState = {
  data: null,
  dataId: null,
  isLoading: null,
  isError: null,
  message: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case infoWisataAction.GET_INFO_WISATA_REQUEST:
      return {
        ...state,
        data: null,
        isLoading: true,
      };
    case infoWisataAction.GET_INFO_WISATA_SUCCESS:
      return { ...state, data: action.data, isLoading: false };
    case infoWisataAction.GET_INFO_WISATA_ERROR:
      return {
        ...state,
        data: null,
        isLoading: false,
      };
    case infoWisataAction.GET_INFO_WISATA_BY_ID_REQUEST:
      return {
        ...state,
        dataId: null,
        isLoading: true,
      };
    case infoWisataAction.GET_INFO_WISATA_BY_ID_SUCCESS:
      return { ...state, dataId: action.data, isLoading: false };
    case infoWisataAction.GET_INFO_WISATA_BY_ID_ERROR:
      return {
        ...state,
        dataId: null,
        isLoading: false,
      };
    default:
      return state;
  }
}
