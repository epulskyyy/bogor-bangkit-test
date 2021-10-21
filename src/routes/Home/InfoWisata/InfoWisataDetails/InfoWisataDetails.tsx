import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../models/RootState";
import Container from "../../components/Container";
import { Button, Image, Result, Spin, Typography } from "antd";
import { capitalize } from "../../../../utils/utils";
import { useParams } from "react-router";
import { getInfoWisataByIdRequest } from "../../../../actions/infoWisata";
import history from "../../../../utils/history";

const { Paragraph } = Typography;
type Props = {
  authedData?: any;
};

const InfoWisataDetails: React.FC<Props> = ({ authedData }) => {
  const infoWisata = useSelector((state: RootState) => state.infoWisata);
  const dispatch = useDispatch();
  const { id }: any = useParams();
  const imageFlicking = () => {
    const images = Object.values(infoWisata.dataId?.data?.url_gambar)?.filter(
      (v) => v !== ""
    );
    return images;
  };
  useEffect(() => {
    dispatch(getInfoWisataByIdRequest(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onBack = () => {
    history.push("/info-wisata");
  };
  return (
    <Container title="Info Wisata" authedData={authedData}>
      <div className="container mt-2 mb-2">
        <Spin spinning={infoWisata.isLoading} tip="Memuat...">
          {infoWisata.isLoading ? (
            <> </>
          ) : infoWisata.dataId ? (
            <>
              <h2>{capitalize(infoWisata.dataId?.data.nama_wisata)}</h2>
              <Image.PreviewGroup>
                {imageFlicking().map((v: any, k: any) => (
                  <Image key={k} style={{ maxWidth: "200px" }} src={v} />
                ))}
              </Image.PreviewGroup>
              <h5>Lokasi : {infoWisata.dataId?.data.lokasi_wisata}</h5>
              <h5>Nomor Hp : {infoWisata.dataId?.data.no_hp}</h5>
              <Paragraph
                ellipsis={{ rows: 4, expandable: true, symbol: "lihat lagi" }}
              >
                {infoWisata.dataId?.data.deskripsi_wisata}
              </Paragraph>
            </>
          ) : (
            <Result
              status="404"
              title="404"
              subTitle="Maaf, Wisata tidak ditemukan."
              extra={
                <Button onClick={onBack} type="primary">
                  Info Wisata Kota Bogor
                </Button>
              }
            />
          )}
        </Spin>
      </div>
    </Container>
  );
};
export default InfoWisataDetails;
