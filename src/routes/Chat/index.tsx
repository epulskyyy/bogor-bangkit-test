import { lazy } from 'react';
import { retry } from '../../utils/retry';

const Product = lazy(() =>  retry(() =>import(/* webpackChunkName: "Chat" */ "./Chat")));

export default Product;