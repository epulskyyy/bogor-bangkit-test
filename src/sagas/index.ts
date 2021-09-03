import {all} from 'redux-saga/effects';
import register from './register';
import auth from './auth';
import categories from './categories';


export default function* rootSaga() {
    yield all([
        categories,
        auth,
        register
    ]);
}
