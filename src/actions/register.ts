import {defaultActionCreator} from ".";

export const SET_FORM_REGISTER = 'SET_FORM_REGISTER'
export const setFormRegister = defaultActionCreator(SET_FORM_REGISTER, 'name', 'value')

export const SET_FORM_STAPS = 'SET_FORM_STAPS'
export const setFormStaps = defaultActionCreator(SET_FORM_STAPS, 'name', 'value')

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const regristrationRequest = defaultActionCreator(REGISTRATION_REQUEST, 'data')
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const regristrationSuccess = defaultActionCreator(REGISTRATION_SUCCESS, 'data','message')
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR'
export const regristrationError = defaultActionCreator(REGISTRATION_ERROR, 'data','message')