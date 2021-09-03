import {defaultActionCreator} from ".";

export const GET_PRODUCT_BY_COUNT_REQUEST = 'GET_PRODUCT_BY_COUNT_REQUEST'
export const getProductByCountRequest = defaultActionCreator(GET_PRODUCT_BY_COUNT_REQUEST, 'data')
export const GET_PRODUCT_BY_COUNT_SUCCESS = 'GET_PRODUCT_BY_COUNT_SUCCESS'
export const getProductByCountSuccess = defaultActionCreator(GET_PRODUCT_BY_COUNT_SUCCESS, 'data')
export const GET_PRODUCT_BY_COUNT_ERROR = 'GET_PRODUCT_BY_COUNT_ERROR'
export const getProductByCountError = defaultActionCreator(GET_PRODUCT_BY_COUNT_ERROR, 'data')

export const GET_PRODUCT_BY_ID_REQUEST = 'GET_PRODUCT_BY_ID_REQUEST'
export const getProductByIDRequest = defaultActionCreator(GET_PRODUCT_BY_ID_REQUEST, 'data')
export const GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS'
export const getProductByIDSuccess = defaultActionCreator(GET_PRODUCT_BY_ID_SUCCESS, 'data')
export const GET_PRODUCT_BY_ID_ERROR = 'GET_PRODUCT_BY_ID_ERROR'
export const getProductByIDError = defaultActionCreator(GET_PRODUCT_BY_ID_ERROR, 'data')
