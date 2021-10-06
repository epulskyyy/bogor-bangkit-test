import {defaultActionCreator} from ".";

export const GET_BANNER_REQUEST = 'GET_BANNER_REQUEST'
export const getBannerRequest = defaultActionCreator(GET_BANNER_REQUEST, )
export const GET_BANNER_SUCCESS = 'GET_BANNER_SUCCESS'
export const getBannerSuccess = defaultActionCreator(GET_BANNER_SUCCESS, 'data')
export const GET_BANNER_ERROR = 'GET_BANNER_ERROR'
export const getBannerError = defaultActionCreator(GET_BANNER_ERROR, 'data')
