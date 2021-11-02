import { lazy } from 'react';
import { retry } from '../../../utils/retry';

const ProfileUmkm = lazy(() =>  retry(() =>import(/* webpackChunkName: "DetailUmkm" */ "./DetailUmkm")));

export default ProfileUmkm;