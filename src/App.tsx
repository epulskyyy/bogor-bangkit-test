import { Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Routes from "./routes";
import history from "./utils/history";
import { endPoint } from "./utils/env";
import axios from "axios";
import { getGeolocation, getPermissionNavigator } from "./utils/geolocation";

import { useAnalytics } from "./utils/useAnalytic";

function App() {
  useAnalytics();
  const getVisitCount = () => {
    var currentLocation = window.location.pathname;
    if (!currentLocation.includes("admin")) {
      const visit = sessionStorage.getItem("visit_");
      axios.get("https://api.ipify.org?format=json").then(async (res) => {
        if (visit !== res?.data?.ip) {
          await axios.get(`${endPoint.pemulihanEkonomiUrl.v1}index`);
          sessionStorage.setItem("visit_", res.data.ip);
        }
      });
    }
  };
  getVisitCount();
  return (
    <Router history={history}>
      <HelmetProvider>
        <Routes />
      </HelmetProvider>
    </Router>
  );
}

export default App;
