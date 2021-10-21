import { endPoint } from "../utils/env";
import services from "./services";

export const getFaq = (data:any) => {
  return services.extGet(`${endPoint.pemulihanEkonomiUrl.v1}faq-all?per_page=${data.perPage}`);
};
