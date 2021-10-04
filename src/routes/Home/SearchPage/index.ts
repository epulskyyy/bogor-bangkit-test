import { lazy } from 'react';
import { retry } from '../../../utils/retry';

const SearchPage = lazy(() =>  retry(() =>import(/* webpackChunkName: "SearchPage" */ "./SearchPage")));

export default SearchPage;