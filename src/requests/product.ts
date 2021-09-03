import { endPoint } from "../utils/env";
import services from "./services";

export const getProductCount = (perPage: any) => {
  return services.get(`${endPoint.pemulihanEkonomiUrl.v1}produk-umkms/visit?perPage=${perPage}`);
};

export const getProductId = (id: any) => {
  return services.get(`${endPoint.pemulihanEkonomiUrl.v1}produk-umkms/produk-umkm${id}`);
};
