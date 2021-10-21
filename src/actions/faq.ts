import {defaultActionCreator} from ".";

export const GET_FAQ_REQUEST = 'GET_FAQ_REQUEST'
export const getFaqRequest = defaultActionCreator(GET_FAQ_REQUEST, 'data')
export const GET_FAQ_SUCCESS = 'GET_FAQ_SUCCESS'
export const getFaqSuccess = defaultActionCreator(GET_FAQ_SUCCESS, 'data')
export const GET_FAQ_ERROR = 'GET_FAQ_ERROR'
export const getFaqError = defaultActionCreator(GET_FAQ_ERROR, 'data')
