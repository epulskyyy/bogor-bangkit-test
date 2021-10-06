import { lazy } from 'react';
import { retry } from '../../../utils/retry';

const InfoWisata = lazy(() =>  retry(() =>import(/* webpackChunkName: "InfoWisata" */ "./InfoWisata")));

export default InfoWisata;