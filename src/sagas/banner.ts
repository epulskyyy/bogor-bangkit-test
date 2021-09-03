import { all, call, put, takeLatest } from "redux-saga/effects";
import * as bannerAction from "../actions/banner";
import { ResponseGenerator } from "../models/RootState";
import { getBanner } from "../requests/banner";

export function* getBannerF() {
  try {
    const response: ResponseGenerator = yield call(getBanner);
    let data = response.data;
    yield put({
      type: bannerAction.GET_BANNER_SUCCESS,
      data,
    });
  } catch (e: any) {
    yield put({
      type: bannerAction.GET_BANNER_ERROR,
      data: e,
    });
  }
}
export default all([takeLatest(bannerAction.GET_BANNER_REQUEST, getBannerF)]);
