import { all, call, put, takeLatest } from "redux-saga/effects";
import * as productAction from "../actions/product";
import { ResponseGenerator } from "../models/RootState";
import { getProductCount, getProductId } from "../requests/product";

export function* getProductCountF(action: any) {
  try {
    const response: ResponseGenerator = yield call(
      getProductCount,
      action.data
    );
    let data = response.data;
    yield put({
      type: productAction.GET_PRODUCT_BY_COUNT_SUCCESS,
      data,
    });
  } catch (e: any) {
    yield put({
      type: productAction.GET_PRODUCT_BY_COUNT_ERROR,
      data: e,
    });
  }
}
export function* getProductIdF(action: any) {
  try {
    const response: ResponseGenerator = yield call(
      getProductId,
      action.data
    );
    let data = response.data;
    yield put({
      type: productAction.GET_PRODUCT_BY_ID_SUCCESS,
      data,
    });
  } catch (e: any) {
    yield put({
      type: productAction.GET_PRODUCT_BY_ID_ERROR,
      data: e,
    });
  }
}
export default all([
  takeLatest(productAction.GET_PRODUCT_BY_COUNT_REQUEST, getProductCountF),
  takeLatest(productAction.GET_PRODUCT_BY_ID_REQUEST, getProductIdF),
]);
