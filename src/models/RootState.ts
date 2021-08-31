import { RegisterRoot } from "./Register";

export interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string
}

export interface RootState {
  register: RegisterRoot
  auth: AuthRoot
}
export interface AuthRoot {
    formData:any,
    isLoading:any,
    isError:any,
    message:any
}