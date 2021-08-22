import { lazy } from 'react';
import { retry } from '../../utils/retry';

const InputOTP = lazy(() =>  retry(()=> import(/* webpackChunkName: "otp-input" */ "./Otp")));

export default InputOTP;