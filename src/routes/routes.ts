import Home from "./Home";
import Auth from "./Auth";
import Register from "./Register";
import Product from "./Product";
import SearchPage from "./Home/SearchPage";
import ProfileUmkm from "./Home/ProfileUmkm";
import Umkm from "./Home/Umkm";
import InfoWisata from "./Home/InfoWisata";
import Dashboard from "./Dashboard/Home";
import Profile from "./Dashboard/Profile";
import ProductDashboard from "./Dashboard/Product";

export const routes = [
  { path: "/infowisata", component: InfoWisata, exact: true },
  { path: "/umkm", component: Umkm, exact: true },
  { path: "/umkm/:id", component: ProfileUmkm, exact: true },
  { path: "/search", component: SearchPage, exact: true },
  { path: "/product/:id", component: Product, exact: true },
  { path: "/", component: Home, exact: true  },
];

export const noAuthRoutes =[
  { path: "/register", component: Register, exact: true },
  { path: "/login", component: Auth },
]

export const protectedRoutes =[
  { path: "/dashboard/product", component: ProductDashboard, exact: true },
  { path: "/dashboard/profile", component: Profile, exact: true },
  { path: "/dashboard", component: Dashboard, exact: true },
]
