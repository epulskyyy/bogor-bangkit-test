import { lazy } from 'react';
import { retry } from '../../../utils/retry';

const ForgotPassword = lazy(() =>  retry(() =>import(/* webpackChunkName: "ForgotPassword" */ "./ForgotPassword")));

export default ForgotPassword;