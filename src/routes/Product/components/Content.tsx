import { Col, Row } from "antd";
import React from "react";
import Images from "./Images";
import Product from "./Product";
import Umkm from "./Umkm";

export default function Content() {
  return (
    <Row gutter={[16, 16]}>
      <Col
        xs={{ order: 2, span: 24 }}
        sm={{ order: 2, span: 24 }}
        md={{ order: 1, span: 24 }}
        lg={{ order: 1, span: 5 }}
      >
        <Umkm />
      </Col>
      <Col
        xs={{ order: 3, span: 24 }}
        sm={{ order: 3, span: 24 }}
        md={{ order: 2, span: 14 }}
        lg={{ order: 2, span: 11 }}
      >
        <Product />
      </Col>
      <Col
        xs={{ order: 1, span: 24 }}
        sm={{ order: 1, span: 24 }}
        md={{ order: 3, span: 10 }}
        lg={{ order: 3, span: 8 }}
      >
        <Images />
      </Col>
    </Row>
  );
}
