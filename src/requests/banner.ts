import { endPoint } from "../utils/env";
import services from "./services";

export const getBanner = () => {
  return services.extGet(`${endPoint.pemulihanEkonomiUrl.v1}banner-iklan-landing`);
};
