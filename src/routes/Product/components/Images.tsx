import "@egjs/flicking-plugins/dist/arrow.css";
import "../styles/reactFlicking.css";
import Flicking from "@egjs/react-flicking";
import { Col, Row, Modal } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../models/RootState";

export default function Images() {
  const [openImage, setopenImage] = useState(false);
  const [content, setcontent] = useState("");
  const { dataId } = useSelector((state: RootState) => state.product);
  const imageUrl = JSON.parse(dataId?.data?.url_gambar || "[]");
  const onClickLinkImage = (l: any) => {
    setopenImage(true);
    setcontent(l);
  };
  const onClose = () => {
    setopenImage(false);
    setcontent("");
  };
  const img =
    "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <>
      <Modal
        title="Modal"
        visible={openImage}
        onOk={onClose}
        onCancel={onClose}
        centered
        footer={null}
      >
        <img className="panel-image" alt="" src={content} />
      </Modal>
      <Row gutter={[15, 15]}>
        <Col lg={24} md={24} xs={24}>
          <Flicking bounce={30} resizeOnContentsReady={true}>
            {imageUrl?.map((v: any, k: any) => (
              <div
                key={k}
                onClick={() => onClickLinkImage(v)}
                className="flicking-panel full has-background-primary"
              >
                <img className="panel-image" alt="" src={v} />
              </div>
            ))}
          </Flicking>
        </Col>
        <Col lg={24} md={24} xs={0}>
          <Flicking
            circular={true}
            resizeOnContentsReady={true}
            adaptive={true}
            bounce={30}
          >
            {imageUrl?.map((v: any, k: any) => (
              <div
                key={k}
                onClick={() => onClickLinkImage(v)}
                className="flicking-panel thumb has-background-primary"
              >
                <img className="panel-image" alt="" src={v} />
              </div>
            ))}
          </Flicking>
        </Col>
      </Row>
    </>
  );
}
