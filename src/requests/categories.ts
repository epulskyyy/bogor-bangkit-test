import { endPoint } from "../utils/env";
import services from "./services";

export const getCategories = (perPage: any) => {
  return services.get(`${endPoint.pemulihanEkonomiUrl.v1}klasifikasi-all?per_page=${perPage}`);
};
