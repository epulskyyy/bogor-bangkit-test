import {all, call, put, takeLatest} from "redux-saga/effects";
import * as authAction from "../actions/auth";
import { ResponseGenerator } from "../models/RootState";
import { login, logout } from "../requests/auth";
import history from "../utils/history";
import { notificationMessage } from "../utils/notifications";

export function* postLogin(action:any) {
    try {
        const response:ResponseGenerator = yield call(login, action.data);
        let data = response.data;
        yield put({
            type: authAction.LOGIN_SUCCESS,
            data,
        });
        notificationMessage("success",`Berhasil`,``)
        localStorage.setItem('access_token', data.data)
        history.push('/')
    } catch (e:any) {
        yield put({
            type: authAction.LOGIN_ERROR,
            error: e,
            message:"Oups, Error"
        });
        yield localStorage.removeItem("emailOtp")
        notificationMessage("error",`Gagal masuk`,`Mohon periksa kembali data yang anda masukan`)
    }
}

export function* postLogout(action:any) {
    try {
        const response:ResponseGenerator = yield call(logout, action.data);
        let data = response.data;
        yield put({
            type: authAction.LOGOUT_SUCCESS,
            data,
        });
        notificationMessage("success",`Berhasi`,`anda telah keluar`)
        history.push("/login")
    } catch (e:any) {
        
        yield put({
            type: authAction.LOGOUT_ERROR,
            error: e,
            message:"Oups, Error"
        });
        notificationMessage("error",`Gagal keluar`,``)
    }
}

export default all([
    takeLatest(authAction.LOGOUT_REQUEST, postLogout),
    takeLatest(authAction.LOGIN_REQUEST, postLogin),
]);