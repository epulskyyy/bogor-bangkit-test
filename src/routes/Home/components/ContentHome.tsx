import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Product from "../../../components/Product";

const ContentHome = () => {
  return (
    <>
      <h3 className="mb-3">PRODUK TERLARIS</h3>
      <Row gutter={[32, 32]}>
        <Col lg={6} ><Product/></Col>
        <Col lg={6} ><Product/></Col>
        <Col lg={6} ><Product/></Col>
        <Col lg={6} ><Product/></Col>

        <Col lg={6} ><Product/></Col>
        <Col lg={6} ><Product/></Col>
        <Col lg={6} ><Product/></Col>
        <Col lg={6} ><Product/></Col>
      </Row>
      <div className="mt-3 mb-3 peb-text-center">
      <Link className="" to="product">Lihat Semua</Link>
      </div>
    </>
  );
};

export default ContentHome;
