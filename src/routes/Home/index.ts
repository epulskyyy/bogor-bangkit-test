import { lazy } from 'react';
import { retry } from '../../utils/retry';

const Home = lazy(() =>  retry(() =>import(/* webpackChunkName: "home" */ "./Home")));

export default Home;