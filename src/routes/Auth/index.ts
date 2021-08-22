import { lazy } from 'react';
import { retry } from '../../utils/retry';

const Login = lazy(() =>  retry(() =>import(/* webpackChunkName: "auth" */ "./Auth")));

export default Login;