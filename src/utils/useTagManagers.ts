import React from "react";
import { useLocation } from "react-router-dom";

import * as managers from "./gtm";
import { useDetectAdBlock } from "adblock-detect-react";

export function useTagManagers() {
  const adBlockDetected = useDetectAdBlock();

  React.useEffect(() => {
    if (!adBlockDetected) managers.init();
  }, []);
}

export default useTagManagers;
