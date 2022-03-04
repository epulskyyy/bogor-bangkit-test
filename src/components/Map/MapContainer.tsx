import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
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
  const GeoJsonData: GeoJSON.Feature<GeoJSON.Point, GeoJSON.GeoJsonProperties> =
    {
      geometry: {
        coordinates: [-6.564151994968291, 106.80699595412383],
        type: "Point",
      },
      properties: {
        name: "some name",
      },
      type: "Feature",
    };
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
      <GeoJSON data={GeoJsonData} />
      {children}
    </MapContainer>
  );
};
export default MapContainers;
