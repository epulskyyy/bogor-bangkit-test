import { lazy } from 'react';
import { retry } from '../../../utils/retry';

const ProfileUmkm = lazy(() =>  retry(() =>import(/* webpackChunkName: "ProfileUmkm" */ "./ProfileUmkm")));

export default ProfileUmkm;