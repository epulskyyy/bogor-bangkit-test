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
  user: UserRoot;
  chat: ChatRoot;
  infoWisata: ProductRoot;
  faq: DefaultRoot;
  categoryFaq: DefaultRoot;
  dashboard: DashboardRoot;
  admin: DefaultRoot;
}
export interface AuthRoot {
  formData: any;
  isLoading: any;
  isError: any;
  message: any;
}
export interface ProductRoot {
  data: any;
  data2: any;
  dataSearch: any;
  dataCount: any;
  dataId: any;
  isLoading: any;
  isLoadingId: any;
  isLoadingSearch: any;
  isError: any;
  message: any;
}
export interface ChatRoot {
  dataMessage: any;
  inputMessage: any;
  notificationCount: any;
  userList: any;
  users: any;
  selectedUserID: any;
  isLoading: any;
  isMessageLoading: any;
  isSendLoading: any;
  isError: any;
  messageRes: any;
}
export interface UserRoot {
  data: any;
  datas: any;
  isLoading: any;
  isError: any;
  message: any;
}
export interface DashboardRoot {
  visitCount: any;
  chart: any;
  isLoading: any;
  isLoadingChart: any;
  isError: any;
  message: any;
}
