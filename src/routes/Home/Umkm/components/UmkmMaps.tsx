import { Avatar, Button, Tag } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Map from "../../../../components/Map/Map";
import MapContainers from "../../../../components/Map/MapContainer";
import { RootState } from "../../../../models/RootState";
import { capitalize } from "../../../../utils/utils";

type Props = {
  selectedId: any;
};

const UmkmMaps: React.FC<Props> = ({ selectedId }) => {
  const { dataInfinite } = useSelector((state: RootState) => state.user);
  const examplePosition: any = [
    { position: [-6.564151994968291, 106.80699595412383] },
    { position: [-6.581205307143434, 106.8245054138565] },
    { position: [-6.607125219671729, 106.7884565261716] },
    { position: [-6.619061565062622, 106.80459269494483] },
    { position: [-6.577112565569175, 106.78536662151289] },
    { position: [-6.582228487267672, 106.81626566809994] },
    { position: [-6.619061565062622, 106.80459269494483] },
    { position: [-6.577112565569175, 106.78536662151289] },
    { position: [-6.582228487267672, 106.81626566809994] },
    { position: [-6.619061565062622, 106.80459269494483] },
    { position: [-6.577112565569175, 106.78536662151289] },
    { position: [-6.582228487267672, 106.81626566809994] },
  ];
  const data = dataInfinite?.data?.data?.map((v: any, i: any) => ({
    ...v,
    title: v.nama_umkm,
    position: [
      v?.data?.longitude ?? examplePosition[i]?.position[0],
      v?.data?.latitude ?? examplePosition[i]?.position[1],
    ],
  }));

  const openWhatsapp = (no_hp: any) => {
    window.open(`https://wa.me/${no_hp}`, "_blank");
  };
  return (
    <div style={{ zIndex: 1 }}>
      <MapContainers zoom={12} width="100%" height="600px">
        {data?.map((item: any) => (
          <Map
            selectedId={Number(selectedId)}
            icon={<Avatar src={item?.profil_gambar} />}
            places={item}
          >
            <h5>{capitalize(item.nama_umkm)}</h5>
            <Tag color="blue" className="mb-1">
              {capitalize(item.umkm_detail?.klasifikasi_umkm)}
            </Tag>
            <Button
              size="small"
              type="ghost"
              onClick={() => openWhatsapp(item.no_hp)}
            >
              {item.no_hp}
            </Button>
            <br />
            <a href={"mailto:" + item.email}>{item.email}</a>
            <h5 className="mt-1">Alamat:</h5>
            <h5>{capitalize(item?.umkm_detail?.alamat_umkm)}</h5>
          </Map>
        ))}
      </MapContainers>
    </div>
  );
};
export default UmkmMaps;
