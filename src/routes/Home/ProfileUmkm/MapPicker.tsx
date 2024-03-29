import Map from "../../../components/Map/Map";
import MapContainers from "../../../components/Map/MapContainer";

type Props = {
  data: any;
  icon: any;
};
const MapPicker: React.FC<Props> = ({ data, icon }) => {
  return (
    <div className=" mt-5" style={{ height: "300px", overflow: "hidden" }}>
      <MapContainers
        zoom={15}
        width="800px"
        height="320px"
        position={data.position}
      >
        <Map icon={icon} places={data} selectedId={null} />
      </MapContainers>
    </div>
  );
};

export default MapPicker;
