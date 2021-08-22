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
}
