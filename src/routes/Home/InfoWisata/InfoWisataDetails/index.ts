import { lazy } from 'react';
import { retry } from '../../../../utils/retry';

const InfoWisata = lazy(() =>  retry(() =>import(/* webpackChunkName: "InfoWisataDetails" */ "./InfoWisataDetails")));

export default InfoWisata;