import { notification } from "antd";
import {all, call, put, takeLatest} from "redux-saga/effects";
import * as registerAction from "../actions/register";
import { ResponseGenerator } from "../models/RootState";
import {register, registerResendOtp, registerVerifyOtp} from "../requests/register";
import history from "../utils/history";
import { notificationMessage } from "../utils/notifications";

export function* postRegister(action:any) {
    try {
        const response:ResponseGenerator = yield call(register, action.data);
        let data = response.data;
        yield put({
            type: registerAction.REGISTRATION_SUCCESS,
            data,
        });
        yield put({
            type: registerAction.SET_FORM_STAPS,
            name:"current",
            value:2
        });
        yield localStorage.setItem("emailOtp", action.data.email)
        notificationMessage("success",`Berhasi`,`Silahkan cek email`)
    } catch (e:any) {
        yield put({
            type: registerAction.REGISTRATION_ERROR,
            error: e,
            message:"Oups, Error"
        });
        yield localStorage.removeItem("emailOtp")
        notificationMessage("error",`Gagal masuk registrasi`,`Mohon periksa kembali data yang anda masukan atau klik ulang Registrasi`)
    }
}

export function* postRegisterVerifyOtp(action:any) {
    try {
        const response:ResponseGenerator = yield call(registerVerifyOtp, action.data);
        let data = response.data;
        localStorage.removeItem("emailOtp")
        yield put({
            type: registerAction.REGISTRATION_OTP_SUCCESS,
            data,
        });
        notificationMessage("success",`Berhasi`,`Akun tervirifikasi silahkan login`)
        history.push("/login")
    } catch (e:any) {
        
        yield put({
            type: registerAction.REGISTRATION_OTP_ERROR,
            error: e,
            message:"Oups, Error"
        });
        notificationMessage("error",`Gagal masuk verifikasi`,`${e?.response?.data?.email.map((v:string)=>(v))||""} Mohon periksa kembali otp anda, klik ulang Verifikasi atau kirim ulang kode otp`)
    }
}

export function* postRegisterResendOtp(action:any) {
    try {
        const response:ResponseGenerator = yield call(registerResendOtp, action.data);
        let data = response.data;        
        yield localStorage.setItem("emailOtp", action.data.email)
        notificationMessage("success",`Berhasi`,`Silahkan cek email`)
    } catch (e:any) {
        yield put({
            type: registerAction.REGISTRATION_OTP_ERROR,
            error: e,
            message:"Oups, Error"
        });
        notificationMessage("error",`Gagal kirim ulang`,``)
    }
}
export default all([
    takeLatest(registerAction.REGISTRATION_REQUEST, postRegister),
    takeLatest(registerAction.REGISTRATION_OTP_REQUEST, postRegisterVerifyOtp),
    takeLatest(registerAction.REGISTRATION_RESEND_OTP_REQUEST, postRegisterResendOtp),
]);