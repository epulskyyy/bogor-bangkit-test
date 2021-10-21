import { endPoint } from "../utils/env";
import services from "./services";

export const getAllUser = (perPage: any, status?: any, page?: any) => {
  return services.get(
    `${endPoint.pemulihanEkonomiUrl.v1}users?per_page=${perPage}&status=${
      status ?? "any"
    }&page=${page ?? 0}`
  );
};
export const getUserById = (id: any) => {
  return services.get(`${endPoint.pemulihanEkonomiUrl.v1}user/${id}`);
};
export const editProfile = (id: any, data: any) => {
  return services.put(
    `${endPoint.pemulihanEkonomiUrl.v1}user-update?user_id=${id}`,
    data
  );
};
