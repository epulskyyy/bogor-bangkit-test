import { all, call, put, takeLatest } from "redux-saga/effects";
import * as registerAction from "../actions/register";
import { ResponseGenerator } from "../models/RootState";
import {
  register,
  registerResendOtp,
  registerVerifyOtp,
} from "../requests/register";
import history from "../utils/history";
import { notificationMessage } from "../utils/notifications";

export function* postRegister(action: any) {
  try {
    localStorage.setItem("emailOtp", action.data.email);
    const response: ResponseGenerator = yield call(register, action.data);
    let data = response.data;
    yield put({
      type: registerAction.REGISTRATION_SUCCESS,
      data,
    });
    yield put({
      type: registerAction.SET_FORM_STAPS,
      name: "current",
      value: 2,
    });
    notificationMessage("success", `Berhasi`, `Silahkan cek email`);
  } catch (e: any) {
    localStorage.removeItem("emailOtp");
    yield put({
      type: registerAction.REGISTRATION_ERROR,
      error: e,
      message: "Oups, Error",
    });
    notificationMessage(
      "error",
      e?.response?.data?.message || `Gagal masuk registrasi`,
      e?.response?.data?.responseDescription ||
        `Mohon periksa kembali data yang anda masukan atau klik ulang Registrasi`
    );
  }
}

export function* postRegisterVerifyOtp(action: any) {
  try {
    const response: ResponseGenerator = yield call(
      registerVerifyOtp,
      action.data
    );
    let data = response.data;
    localStorage.removeItem("emailOtp");
    yield put({
      type: registerAction.REGISTRATION_OTP_SUCCESS,
      data,
    });
    notificationMessage(
      "success",
      `Berhasi`,
      `Akun terverifikasi silahkan login`
    );
    history.push("/login");
  } catch (e: any) {
    yield put({
      type: registerAction.REGISTRATION_OTP_ERROR,
      error: e,
      message: "Oups, Error",
    });
    notificationMessage(
      "error",
      e?.response?.data?.message || `Gagal masuk verifikasi`,
      e?.response?.data?.responseDescription ||
        `Mohon periksa kembali otp anda, klik ulang Verifikasi atau kirim ulang kode otp`
    );
  }
}

export function* postRegisterResendOtp(action: any) {
  try {
    yield call(registerResendOtp, action.data);
    yield localStorage.setItem("emailOtp", action.data.email);
    notificationMessage("success", `Berhasi`, `Silahkan cek email`);
  } catch (e: any) {
    yield put({
      type: registerAction.REGISTRATION_OTP_ERROR,
      error: e,
      message: "Oups, Error",
    });
    notificationMessage(
      "error",
      e?.response?.data?.message || `Gagal kirim ulang`,
      e?.response?.data?.responseDescription || ``
    );
  }
}
export default all([
  takeLatest(registerAction.REGISTRATION_REQUEST, postRegister),
  takeLatest(registerAction.REGISTRATION_OTP_REQUEST, postRegisterVerifyOtp),
  takeLatest(
    registerAction.REGISTRATION_RESEND_OTP_REQUEST,
    postRegisterResendOtp
  ),
]);
