import {defaultActionCreator} from ".";

export const GET_INFO_WISATA_REQUEST = 'GET_INFO_WISATA_REQUEST'
export const getInfoWisataRequest = defaultActionCreator(GET_INFO_WISATA_REQUEST, 'data')
export const GET_INFO_WISATA_SUCCESS = 'GET_INFO_WISATA_SUCCESS'
export const getInfoWisataSuccess = defaultActionCreator(GET_INFO_WISATA_SUCCESS, 'data')
export const GET_INFO_WISATA_ERROR = 'GET_INFO_WISATA_ERROR'
export const getInfoWisataError = defaultActionCreator(GET_INFO_WISATA_ERROR, 'data')

export const GET_INFO_WISATA_BY_ID_REQUEST = 'GET_INFO_WISATA_BY_ID_REQUEST'
export const getInfoWisataByIdRequest = defaultActionCreator(GET_INFO_WISATA_BY_ID_REQUEST, 'data')
export const GET_INFO_WISATA_BY_ID_SUCCESS = 'GET_INFO_WISATA_BY_ID_SUCCESS'
export const getInfoWisataByIdSuccess = defaultActionCreator(GET_INFO_WISATA_BY_ID_SUCCESS, 'data')
export const GET_INFO_WISATA_BY_ID_ERROR = 'GET_INFO_WISATA_BY_ID_ERROR'
export const getInfoWisataByIdError = defaultActionCreator(GET_INFO_WISATA_BY_ID_ERROR, 'data')
