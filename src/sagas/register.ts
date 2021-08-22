import {all, call, put, takeLatest} from "redux-saga/effects";
import * as registerAction from "../actions/register";
import { ResponseGenerator } from "../models/RootState";
import {register} from "../requests/register";

export function* postRegister(action:any) {
    try {
        const response:ResponseGenerator = yield call(register, action.data);
        let data = response.data;
        yield put({
            type: registerAction.REGISTRATION_SUCCESS,
            data,
        });
    } catch (e) {
        yield put({
            type: registerAction.REGISTRATION_ERROR,
            error: e,
        });
    }
}

export default all([
    takeLatest(registerAction.REGISTRATION_REQUEST, postRegister),
]);