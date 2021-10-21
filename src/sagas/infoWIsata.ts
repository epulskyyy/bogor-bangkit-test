import { all, call, put, takeLatest } from "redux-saga/effects";
import * as infoWisataAction from "../actions/infoWisata";
import { ResponseGenerator } from "../models/RootState";
import { getInfoWisata, getInfoWisataById } from "../requests/infoWisata";

export function* getInfoWisataF(action: any) {
  try {
    const response: ResponseGenerator = yield call(getInfoWisata, action.data);
    let data = response.data;
    yield put({
      type: infoWisataAction.GET_INFO_WISATA_SUCCESS,
      data,
    });
  } catch (e: any) {
    yield put({
      type: infoWisataAction.GET_INFO_WISATA_ERROR,
      data: e,
    });
  }
}
export function* getInfoWisataByIdF(action: any) {
  try {
    const response: ResponseGenerator = yield call(
      getInfoWisataById,
      action.data
    );
    let data = response.data;
    yield put({
      type: infoWisataAction.GET_INFO_WISATA_BY_ID_SUCCESS,
      data,
    });
  } catch (e: any) {
    yield put({
      type: infoWisataAction.GET_INFO_WISATA_BY_ID_ERROR,
      data: e,
    });
  }
}
export default all([
  takeLatest(infoWisataAction.GET_INFO_WISATA_REQUEST, getInfoWisataF),
  takeLatest(infoWisataAction.GET_INFO_WISATA_BY_ID_REQUEST, getInfoWisataByIdF),
]);
