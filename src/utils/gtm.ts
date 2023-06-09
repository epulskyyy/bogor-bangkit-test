import ga4 from "react-ga4";

import TagManager from "react-gtm-module";

const GTM_ID = "GTM-TLQH7D6";
const isProduction = process.env.NODE_ENV === "production";

export const init = () =>
  TagManager.initialize({
    gtmId: GTM_ID,
    dataLayer: {
      userId: "001",
      userProject: "coba",
      testMode: !isProduction,
    },
  });
