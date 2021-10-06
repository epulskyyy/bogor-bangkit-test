import {all, call, put, takeLatest} from "redux-saga/effects";
import * as categoryActions from "../actions/categories";
import { ResponseGenerator } from "../models/RootState";
import { getCategories } from "../requests/categories";

export function* getCategoriesF(action:any) {
    try {
        const response:ResponseGenerator = yield call(getCategories, action.data);
        let data = response.data;
        yield put({
            type: categoryActions.GET_CATEGORIES_SUCCESS,
            data,
        });
    } catch (e:any) {
        yield put({
            type: categoryActions.GET_CATEGORIES_ERROR,
            data: e,
        });
    }
}
export default all([
    takeLatest(categoryActions.GET_CATEGORIES_REQUEST, getCategoriesF),
]);