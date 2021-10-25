import { lazy } from 'react';
import { retry } from '../../../utils/retry';

const ForgotPasswordReset = lazy(() =>  retry(() =>import(/* webpackChunkName: "ForgotPasswordReset" */ "./ForgotPasswordReset")));

export default ForgotPasswordReset;