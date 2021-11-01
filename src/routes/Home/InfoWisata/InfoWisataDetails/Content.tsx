import { Col, Row } from "antd";
import React from "react";
import { AuthUser } from "../../../../models/AuthUser";
import DaftarWisataLain from "./DaftarWisataLain";
import DeskripsiWisata from "./DeskripsiWisata";
import DetailWisata from "./DetailWisata";
type Props = {
  authedData?: AuthUser;
};
const Content: React.FC<Props> = ({ authedData }) => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col
          xs={{ order: 3, span: 24 }}
          sm={{ order: 3, span: 24 }}
          md={{ order: 2, span: 10 }}
          lg={{ order: 1, span: 5 }}
        >
          <DetailWisata />
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 1, span: 24 }}
          md={{ order: 1, span: 24 }}
          lg={{ order: 2, span: 14 }}
        >
          <DeskripsiWisata />
        </Col>
        <Col
          xs={{ order: 2, span: 24 }}
          sm={{ order: 2, span: 24 }}
          md={{ order: 3, span: 14 }}
          lg={{ order: 3, span: 5 }}
        >
          <DaftarWisataLain />
        </Col>
      </Row>
    </>
  );
};
export default Content;
