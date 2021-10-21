import { lazy } from "react";
import { retry } from "../../../utils/retry";

const InfoWisata = lazy(() =>
  retry(() => import(/* webpackChunkName: "Faq" */ "./Faq"))
);

export default InfoWisata;
