import {all} from 'redux-saga/effects';
import register from './register';
import auth from './auth';


export default function* rootSaga() {
    yield all([
        auth,register
    ]);
}
