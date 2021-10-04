import { Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Routes from './routes';
import history from "./utils/history";

function App() {
  return (
      <Router history={history}>
        <HelmetProvider>
          <Routes />
        </HelmetProvider>
      </Router>
  );
}

export default App;
