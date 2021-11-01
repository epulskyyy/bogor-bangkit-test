import { Card, Col, Image, Row } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../models/RootState";

export default function DeskripsiWisata() {
  const { dataId } = useSelector((state: RootState) => state.infoWisata);
  const detailWisata = dataId?.data?.url_socmed;
  const makeEmbedUrl = (uri: string) => {
    return (
      "https://www.youtube.com/embed/" +
      uri.split("=").slice(uri.split("=").length - 1)
    );
  };
  return (
    <Card className="mr-2">
      <div className="iframe-container">
        <iframe
          className="responsive-iframe"
          src={
            detailWisata.youtube.includes("embed")
              ? detailWisata.youtube
              : makeEmbedUrl(detailWisata.youtube)
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className="deskripsi-container mt-3">
        <Text>{dataId.data.deskripsi_wisata}</Text>
      </div>
      <Card title={"Galeri wisata"} className="mt-5">
        <Row gutter={[16, 16]}>
          {dataId?.data.url_gambar?.map((gambar: string) => {
            return (
              <Col
                xs={{ span: 12 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <Image src={gambar} alt="galeri wisata" width={"100%"} />
              </Col>
            );
          })}
        </Row>
      </Card>
    </Card>
  );
}
