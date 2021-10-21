import { all, call, put, takeLatest } from "redux-saga/effects";
import * as faqAction from "../actions/faq";
import { ResponseGenerator } from "../models/RootState";
import { getFaq } from "../requests/faq";

export function* getFaqF(action:any) {
  try {
    const response: ResponseGenerator = yield call(getFaq,action.data);
    let data = response.data;
    yield put({
      type: faqAction.GET_FAQ_SUCCESS,
      data,
    });
  } catch (e: any) {
    yield put({
      type: faqAction.GET_FAQ_ERROR,
      data: e,
    });
  }
}
export default all([takeLatest(faqAction.GET_FAQ_REQUEST, getFaqF)]);
