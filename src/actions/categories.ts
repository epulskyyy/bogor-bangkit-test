import {defaultActionCreator} from ".";

export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST'
export const getCategoriesRequest = defaultActionCreator(GET_CATEGORIES_REQUEST, 'data')
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const getCategoriesSuccess = defaultActionCreator(GET_CATEGORIES_SUCCESS, 'data')
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR'
export const getCategoriesError = defaultActionCreator(GET_CATEGORIES_ERROR, 'data')