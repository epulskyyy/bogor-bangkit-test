import React from "react";
import { useLocation } from "react-router-dom";

import * as analytics from "./ga4";
import { useDetectAdBlock } from "adblock-detect-react";

export function useAnalytics() {
  const location = useLocation();
  const adBlockDetected = useDetectAdBlock();

  React.useEffect(() => {
    if (!adBlockDetected) analytics.init();
  }, []);

  React.useEffect(() => {
    if (!adBlockDetected) {
      const path = location.pathname + location.search;
      analytics.sendPageview(path);
    }
  }, [adBlockDetected, location]);
}

export default useAnalytics;
