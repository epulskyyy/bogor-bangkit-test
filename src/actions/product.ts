import {defaultActionCreator} from ".";

export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST'
export const getProducRequest = defaultActionCreator(GET_PRODUCT_REQUEST, 'data')
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
export const getProducSuccess = defaultActionCreator(GET_PRODUCT_SUCCESS, 'data')
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR'
export const getProducError = defaultActionCreator(GET_PRODUCT_ERROR, 'data')

export const GET_PRODUCT_SEARCH_REQUEST = 'GET_PRODUCT_SEARCH_REQUEST'
export const getProductSearchRequest = defaultActionCreator(GET_PRODUCT_SEARCH_REQUEST, 'data')
export const GET_PRODUCT_SEARCH_SUCCESS = 'GET_PRODUCT_SEARCH_SUCCESS'
export const getProductSearchSuccess = defaultActionCreator(GET_PRODUCT_SEARCH_SUCCESS, 'data')
export const GET_PRODUCT_SEARCH_ERROR = 'GET_PRODUCT_SEARCH_ERROR'
export const getProductSearchError = defaultActionCreator(GET_PRODUCT_SEARCH_ERROR, 'data')

export const GET_PRODUCT_BY_COUNT_REQUEST = 'GET_PRODUCT_BY_COUNT_REQUEST'
export const getProductByCountRequest = defaultActionCreator(GET_PRODUCT_BY_COUNT_REQUEST, 'data')
export const GET_PRODUCT_BY_COUNT_SUCCESS = 'GET_PRODUCT_BY_COUNT_SUCCESS'
export const getProductByCountSuccess = defaultActionCreator(GET_PRODUCT_BY_COUNT_SUCCESS, 'data')
export const GET_PRODUCT_BY_COUNT_ERROR = 'GET_PRODUCT_BY_COUNT_ERROR'
export const getProductByCountError = defaultActionCreator(GET_PRODUCT_BY_COUNT_ERROR, 'data')

export const GET_PRODUCT_BY_HITS_REQUEST = 'GET_PRODUCT_BY_HITS_REQUEST'
export const getProductByHitsRequest = defaultActionCreator(GET_PRODUCT_BY_HITS_REQUEST, 'data')
export const GET_PRODUCT_BY_HITS_SUCCESS = 'GET_PRODUCT_BY_HITS_SUCCESS'
export const getProductByHitsSuccess = defaultActionCreator(GET_PRODUCT_BY_HITS_SUCCESS, 'data')
export const GET_PRODUCT_BY_HITS_ERROR = 'GET_PRODUCT_BY_HITS_ERROR'
export const getProductByHitsError = defaultActionCreator(GET_PRODUCT_BY_HITS_ERROR, 'data')

export const GET_PRODUCT_BY_ID_REQUEST = 'GET_PRODUCT_BY_ID_REQUEST'
export const getProductByIDRequest = defaultActionCreator(GET_PRODUCT_BY_ID_REQUEST, 'data')
export const GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS'
export const getProductByIDSuccess = defaultActionCreator(GET_PRODUCT_BY_ID_SUCCESS, 'data')
export const GET_PRODUCT_BY_ID_ERROR = 'GET_PRODUCT_BY_ID_ERROR'
export const getProductByIDError = defaultActionCreator(GET_PRODUCT_BY_ID_ERROR, 'data')

export const POST_PRODUCT_REQUEST = 'POST_PRODUCT_REQUEST'
export const postProductRequest = defaultActionCreator(POST_PRODUCT_REQUEST, 'data', 'func')
export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS'
export const postProductSuccess = defaultActionCreator(POST_PRODUCT_SUCCESS, 'data')
export const POST_PRODUCT_ERROR = 'POST_PRODUCT_ERROR'
export const postProductError = defaultActionCreator(POST_PRODUCT_ERROR, 'data')

export const EDIT_PRODUCT_REQUEST = 'EDIT_PRODUCT_REQUEST'
export const editProductRequest = defaultActionCreator(EDIT_PRODUCT_REQUEST, 'data', "id", 'func')
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS'
export const editProductSuccess = defaultActionCreator(EDIT_PRODUCT_SUCCESS, 'data')
export const EDIT_PRODUCT_ERROR = 'EDIT_PRODUCT_ERROR'
export const editProductError = defaultActionCreator(EDIT_PRODUCT_ERROR, 'data')

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST'
export const deleteProductRequest = defaultActionCreator(DELETE_PRODUCT_REQUEST, 'id' , 'func')
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS'
export const deleteProductSuccess = defaultActionCreator(DELETE_PRODUCT_SUCCESS, 'data')
export const DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR'
export const deleteProductError = defaultActionCreator(DELETE_PRODUCT_ERROR, 'data')
