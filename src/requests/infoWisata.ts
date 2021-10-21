import { endPoint } from "../utils/env";
import services from "./services";

export const getInfoWisata = (data:any) => {
  return services.extGet(`${endPoint.pemulihanEkonomiUrl.v1}info-wisata?per_page=${data.perPage}&nama_wisata=${data.name}&lokasi_wisata=${data.location}&page=${data.page}`);
};

export const getInfoWisataById = (id:any) => {
  return services.extGet(`${endPoint.pemulihanEkonomiUrl.v1}info-wisata/${id}`);
};
