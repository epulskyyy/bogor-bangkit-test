import {defaultActionCreator} from ".";

export const SET_FORM_REGISTER = 'SET_FORM_REGISTER'
export const setFormRegister = defaultActionCreator(SET_FORM_REGISTER, 'name', 'value')

export const SET_FORM_STAPS = 'SET_FORM_STAPS'
export const setFormStaps = defaultActionCreator(SET_FORM_STAPS, 'name', 'value')

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const registrationRequest = defaultActionCreator(REGISTRATION_REQUEST, 'data')
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const registrationSuccess = defaultActionCreator(REGISTRATION_SUCCESS, 'data','message')
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR'
export const registrationError = defaultActionCreator(REGISTRATION_ERROR, 'error','message')

export const REGISTRATION_OTP_REQUEST = 'REGISTRATION_OTP_REQUEST'
export const registrationOtpRequest = defaultActionCreator(REGISTRATION_OTP_REQUEST, 'data')
export const REGISTRATION_OTP_SUCCESS = 'REGISTRATION_OTP_SUCCESS'
export const registrationOtpSuccess = defaultActionCreator(REGISTRATION_OTP_SUCCESS, 'data','message')
export const REGISTRATION_OTP_ERROR = 'REGISTRATION_OTP_ERROR'
export const registrationOtpError = defaultActionCreator(REGISTRATION_OTP_ERROR, 'error','message')

export const REGISTRATION_RESEND_OTP_REQUEST = 'REGISTRATION_RESEND_OTP_REQUEST'
export const registrationResendOtpRequest = defaultActionCreator(REGISTRATION_RESEND_OTP_REQUEST, 'data')

export const REGISTRATION_RESET = 'REGISTRATION_RESET'
export const registrationReset = defaultActionCreator(REGISTRATION_RESET, )