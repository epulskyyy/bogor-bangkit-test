import { endPoint } from "../utils/env";
import services from "./services";

export const register = (data: any) => {
  return services.extPost(`${endPoint.pemulihanEkonomiUrl.v1}register`, data);
};
export const registerVerifyOtp = (data: any) => {
  return services.extPost(`${endPoint.pemulihanEkonomiUrl.v1}verify`, data);
};
export const registerResendOtp = (data: any) => {
  return services.extPost(`${endPoint.pemulihanEkonomiUrl.v1}resendOtp`, data);
};
