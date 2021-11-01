import { endPoint } from "../utils/env";
import services from "./services";

export const getVisitCount = () => {
  return services.extGet(`${endPoint.pemulihanEkonomiUrl.v1}visitCount`);
};

export const getChartDashboard = () => {
  return services.extGet(`${endPoint.pemulihanEkonomiUrl.v1}get-data-chart`);
};
