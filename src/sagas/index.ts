import {all} from 'redux-saga/effects';
import register from './register';
import auth from './auth';
import categories from './categories';
import product from './product';
import banner from './banner';
import user from './user';
import chat from './chat';


export default function* rootSaga() {
    yield all([
        chat,
        user,
        banner,
        product,
        categories,
        auth,
        register
    ]);
}
