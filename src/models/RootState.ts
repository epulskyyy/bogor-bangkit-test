import { RegisterRoot } from "./Register";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export interface DefaultRoot {
  data: any;
  isLoading: any;
  isError: any;
  message: any;
}
export interface RootState {
  register: RegisterRoot;
  auth: AuthRoot;
  categories: DefaultRoot;
  product: ProductRoot;
  banner: DefaultRoot;
  user: DefaultRoot;
}
export interface AuthRoot {
  formData: any;
  isLoading: any;
  isError: any;
  message: any;
}
export interface ProductRoot {
  data: any;
  dataCount: any;
  dataId: any;
  isLoading: any;
  isError: any;
  message: any;
}
