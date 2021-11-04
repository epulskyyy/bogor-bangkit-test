import React, { useEffect, useRef } from "react";
import { Marker, Popup } from "react-leaflet";

import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
type Props = {
  places: any;
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  selectedId: any;
};

const Map: React.FC<Props> = ({ places, icon, selectedId, children }) => {
  const iconMarkup = renderToStaticMarkup(icon);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
    attribution: places?.id,
  });

  const ref: any = useRef(null);
  useEffect(() => {
    if (ref.current.options.icon.options.attribution === selectedId) {
      ref.current.openPopup();
    } else {
      ref.current.closePopup();
    }
  });
  let content = (
    <>
      <h5>{places?.title}</h5>
      <br />
      {places?.description}
    </>
  );
  if (children) {
    content = <>{children}</>;
  }
  return (
    <Marker
      key={places?.title}
      position={places?.position}
      icon={customMarkerIcon}
      ref={ref}
    >
      <Popup key={places?.id}>{content}</Popup>
    </Marker>
  );
};
export default Map;
