import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { _bogor_mark_map } from "../../utils/constants";

type Props = {
  width: string;
  height: string;
  position?: LatLngExpression;
  zoom: number;
};
const MapContainers: React.FC<Props> = ({
  children,
  width,
  height,
  position,
  zoom,
}) => {
  return (
    <MapContainer
      center={position || _bogor_mark_map}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ maxWidth: width, height, zIndex: 1 }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};
export default MapContainers;
