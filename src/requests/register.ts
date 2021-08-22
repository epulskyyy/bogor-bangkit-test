import { endPoint } from "../utils/env"
import services from "./services"

export const register=(data:any)=>{
  return services.extPost(`${endPoint.pemulihanEkonomiUrl.v1}/register`, data)
}