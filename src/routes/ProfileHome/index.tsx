import { lazy } from 'react';
import { retry } from '../../utils/retry';

const Product = lazy(() =>  retry(() =>import(/* webpackChunkName: "Profile" */ "./Profile")));

export default Product;