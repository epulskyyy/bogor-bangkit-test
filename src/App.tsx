import { Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Routes from './routes';
import history from "./utils/history";
import { endPoint } from "./utils/env";

function App() {
  const visit = sessionStorage.getItem('visit_')
  if (visit != undefined) {
    fetch(`${endPoint.pemulihanEkonomiUrl}/index`).then(()=>{
      sessionStorage.setItem("visit_","_true")
    })
  }
  return (
      <Router history={history}>
        <HelmetProvider>
          <Routes />
        </HelmetProvider>
      </Router>
  );
}

export default App;
