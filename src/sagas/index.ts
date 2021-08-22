import {all} from 'redux-saga/effects';
import register from './register';


export default function* rootSaga() {
    yield all([
        register
    ]);
}
