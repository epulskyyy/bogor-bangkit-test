import { all, call, put, takeLatest } from "redux-saga/effects";
import * as dashboardAction from "../actions/dashboard";
import { ResponseGenerator } from "../models/ResponseGenerator";
import { getChartDashboard, getVisitCount } from "../requests/dashboard";

export function* getVisitCountF() {
  try {
    const response: ResponseGenerator = yield call(getVisitCount);
    const response2: ResponseGenerator = yield call(getChartDashboard);
    let data = response.data;
    let chart = response2.data;
    yield put({
      type: dashboardAction.VISIT_COUNT_SUCCESS,
      data,
    });
    yield put({
      type: dashboardAction.CHART_DASHBOARD_SUCCESS,
      data: chart,
    });
  } catch (e: any) {
    yield put({
      type: dashboardAction.VISIT_COUNT_ERROR,
      error: e,
      message: "Oups, Error",
    });
  }
}

export default all([
  takeLatest(dashboardAction.VISIT_COUNT_REQUEST, getVisitCountF),
]);
