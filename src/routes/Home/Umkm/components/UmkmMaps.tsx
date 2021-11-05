import { ArrowRightOutlined } from "@ant-design/icons";
import { Avatar, Button, Tag } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Map from "../../../../components/Map/Map";
import MapContainers from "../../../../components/Map/MapContainer";
import { RootState } from "../../../../models/RootState";
import { getDistance } from "../../../../utils/geolocation";
import { capitalize } from "../../../../utils/utils";

import iconLoc from "../../../../assets/peb-location.svg";
import { examplePosition } from "../../../../utils/constants";

type Props = {
  selectedId: any;
  geloc: any;
};

const UmkmMaps: React.FC<Props> = ({ selectedId, geloc }) => {
  const { dataInfinite } = useSelector((state: RootState) => state.user);

  const data = dataInfinite?.data?.data?.map((v: any, i: any) => ({
    ...v,
    title: v.nama_umkm,
    position: [
      v?.data?.latitude ?? examplePosition[i]?.position[0],
      v?.data?.longitude ?? examplePosition[i]?.position[1],
    ],
  }));

  const openWhatsapp = (no_hp: any) => {
    window.open(`https://wa.me/${no_hp}`, "_blank");
  };

  return (
    <div style={{ zIndex: 1, height: "600px", overflow: "hidden" }}>
      <MapContainers zoom={12} width="100%" height="620px">
        {data?.map((item: any) => (
          <Map
            selectedId={Number(selectedId)}
            icon={<Avatar src={item?.profil_gambar} />}
            places={item}
          >
            <h5>{capitalize(item.nama_umkm)}</h5>{" "}
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
            
            <div className="peb-dflex-between">
              <div>
                {geloc ? (
                  <h5 style={{ margin: 0 }}>
                    <img src={iconLoc} alt="loc" height="18px" />
                    {getDistance(
                      [geloc.latitude, geloc.longitude],
                      [item?.position[0], item?.position[1]]
                    )}
                  </h5>
                ) : null}
              </div>

              <Link to={"/umkm/" + item.id}>
                Lihat <ArrowRightOutlined />
              </Link>
            </div>
          </Map>
        ))}
      </MapContainers>
    </div>
  );
};
export default UmkmMaps;
