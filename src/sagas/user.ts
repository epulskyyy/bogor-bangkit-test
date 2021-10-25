import { all, call, put, takeLatest } from "redux-saga/effects";
import * as userAction from "../actions/user";
import { ResponseGenerator } from "../models/RootState";
import { editProfile, getAllUser, getUserById } from "../requests/user";
import { notificationMessage } from "../utils/notifications";

export function* getAllUserF(action: any) {
  try {
    const response: ResponseGenerator = yield call(
      getAllUser,
      action.perPage,
      action.status,
      action.page
    );
    let data = response.data;
    yield put({
      type: userAction.GET_ALL_USER_SUCCESS,
      data,
    });
  } catch (e: any) {
    yield put({
      type: userAction.GET_ALL_USER_ERROR,
      data: e,
    });
  }
}

export function* getUserByIdF(action: any) {
  try {
    const response: ResponseGenerator = yield call(getUserById, action.id);
    let data = response.data;
    yield put({
      type: userAction.GET_USER_BY_ID_SUCCESS,
      data,
    });
  } catch (e: any) {
    yield put({
      type: userAction.GET_USER_BY_ID_ERROR,
      data: e,
    });
  }
}

export function* editProfileF(action: any) {
  try {
    const response: ResponseGenerator = yield call(
      editProfile,
      action.id,
      action.data
    );
    let data = response.data;
    yield put({
      type: userAction.EDIT_PROFILE_SUCCESS,
      data,
    });
    notificationMessage("success", `Berhasil menyimpan!`, ``);
    action.func();
  } catch (e: any) {
    yield put({
      type: userAction.EDIT_PROFILE_ERROR,
      data: e,
    });
    notificationMessage(
      "error",
      e?.response?.data?.message || `Gagal menyimpan`,
      e?.response?.data?.responseDescription || `coba beberapa saat lagi`
    );
  }
}
export default all([
  takeLatest(userAction.GET_ALL_USER_REQUEST, getAllUserF),
  takeLatest(userAction.GET_USER_BY_ID_REQUEST, getUserByIdF),
  takeLatest(userAction.EDIT_PROFILE_REQUEST, editProfileF),
]);
