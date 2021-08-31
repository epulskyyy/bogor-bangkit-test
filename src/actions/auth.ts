import {defaultActionCreator} from ".";

export const SET_FORM_AUTH = 'SET_FORM_AUTH'
export const setFormAuth = defaultActionCreator(SET_FORM_AUTH, 'name', 'value')

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const loginRequest = defaultActionCreator(LOGIN_REQUEST, 'data')
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginSuccess = defaultActionCreator(LOGIN_SUCCESS, 'data')
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const loginError = defaultActionCreator(LOGIN_ERROR, 'data')

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LogoutRequest = defaultActionCreator(LOGOUT_REQUEST, 'data')
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LogoutSuccess = defaultActionCreator(LOGOUT_SUCCESS, 'data')
export const LOGOUT_ERROR = 'LOGOUT_ERROR'
export const LogoutError = defaultActionCreator(LOGOUT_ERROR, 'data')
