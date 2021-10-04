import { lazy } from 'react';
import { retry } from '../../../utils/retry';

const Profile = lazy(() =>  retry(() =>import(/* webpackChunkName: "Profile" */ "./Profile")));

export default Profile;