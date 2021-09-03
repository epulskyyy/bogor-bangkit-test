import { RegisterRoot } from "./Register";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface RootState {
  register: RegisterRoot;
  auth: AuthRoot;
  categories: CategoriesRoot;
  product: ProductRoot;
  banner: BannerRoot
}
export interface AuthRoot {
  formData: any;
  isLoading: any;
  isError: any;
  message: any;
}
export interface CategoriesRoot {
  data: any;
  isLoading: any;
  isError: any;
  message: any;
}

export interface ProductRoot {
  dataCount: any;
  dataId: any;
  isLoading: any;
  isError: any;
  message: any;
}

export interface BannerRoot {
  data: any;
  isLoading: any;
  isError: any;
  message: any;
}

