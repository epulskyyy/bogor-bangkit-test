import { endPoint } from "../utils/env";
import services from "./services";

export const getProductCount = (perPage: any) => {
  return services.get(`${endPoint.pemulihanEkonomiUrl.v1}produk-umkms/visit?perPage=${perPage}`);
};

export const getProductId = (id: any) => {
  return services.get(`${endPoint.pemulihanEkonomiUrl.v1}produk-umkm-landing/${id}`);
};

export const getProduct = (data:any) => {
  return services.get(`${endPoint.pemulihanEkonomiUrl.v1}produk-umkm-landing?id_kategori=${data.category_id}&perPage=${data.perPage}&sort=${data.sort}&nama=${data.name}&id_umkm=${data.umkm_id}&page=${data.page}`);
};
