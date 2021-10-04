import { lazy } from 'react';
import { retry } from '../../../utils/retry';

const Umkm = lazy(() =>  retry(() =>import(/* webpackChunkName: "Umkm" */ "./Umkm")));

export default Umkm;