import { useEffect, useState } from "react";
import {
  getGeolocation,
  getPermissionNavigator,
} from "../../../utils/geolocation";
import { notificationMessage } from "../../../utils/notifications";
import UmkmContent from "./components/UmkmContent";

type Props = {
  authedData?: any;
};

const Umkm: React.FC<Props> = ({ authedData }) => {
  const [geloc, setGeloc] = useState<any>();
  const getDataLoc = async () => {
    await getPermissionNavigator((result: any) => {
      if (result === "denied") {
        notificationMessage(
          "warning",
          "ijin kan aplikasi mengakses lokasi anda",
          <>
            <a
              target="_blank"
              href="https://www.google.com/search?q=cara+mengaktifkan+lokasi+di+laptop+atau+hp"
              rel="noreferrer"
            >
              ~ cara mengaktifkan lokasi ~
            </a>
          </>,
          "bottomRight",
          0
        );
      } else {
        getGeolocation((data: any) => {
          if (data == null) {
            return;
          }
          if (
            geloc?.latitude === data?.latitude &&
            geloc?.longitude === data?.longitude
          ) {
            return;
          } else {
            setGeloc(data);
          }
          return data;
        });
      }
    });
  };
  useEffect(() => {
    getDataLoc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geloc]);
  return <UmkmContent authedData={authedData} geloc={geloc} />;
};
export default Umkm;
