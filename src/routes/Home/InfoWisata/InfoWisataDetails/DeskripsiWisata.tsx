import { Card, Col, Image, Row, Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../models/RootState";

import draftToHtml from "draftjs-to-html";

const { TabPane } = Tabs;

export default function DeskripsiWisata() {
  const { dataId } = useSelector((state: RootState) => state.infoWisata);
  const detailWisata = dataId?.data?.url_socmed;
  const makeEmbedUrl = (uri: string) => {
    return (
      "https://www.youtube.com/embed/" +
      uri.split("=").slice(uri.split("=").length - 1)
    );
  };
  function callback(key: any) {
    console.log(key);
  }
  const sanitizedData = () => {
    try {
      const newBody = draftToHtml(JSON.parse(dataId.data.deskripsi_wisata));
      return {
        __html: newBody,
      };
    } catch (error) {
      return {
        __html: `${dataId.data.deskripsi_wisata}`,
      };
    }
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
      <Tabs
        defaultActiveKey="deskripsi-wisata"
        onChange={callback}
        className="mt-5"
      >
        <TabPane tab="Deskripsi Wisata" key="deskripsi-wisata">
          <div className="deskripsi-container ">
            <div dangerouslySetInnerHTML={sanitizedData()}></div>
          </div>
        </TabPane>
        <TabPane tab="Galeri Gambar">
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
        </TabPane>
      </Tabs>
    </Card>
  );
}
