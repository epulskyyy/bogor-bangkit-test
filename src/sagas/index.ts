import {all} from 'redux-saga/effects';
import register from './register';
import auth from './auth';
import categories from './categories';
import product from './product';
import banner from './banner';


export default function* rootSaga() {
    yield all([
        banner,
        product,
        categories,
        auth,
        register
    ]);
}
