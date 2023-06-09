import ga4 from "react-ga4";

import TagManager, { DataLayerArgs } from "react-gtm-module";

const GTM_ID = "GTM-P65493P";
const isProduction = process.env.NODE_ENV === "production";

export const init = () =>
  TagManager.initialize({
    gtmId: GTM_ID,
    dataLayerName: "coba",
    events: {
      sendUserInfo: "userInfo",
    },
  });

export const sendDataLayer = (tagManagerArgs: DataLayerArgs) =>
  TagManager.dataLayer(tagManagerArgs);
