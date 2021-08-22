import { Col, Row } from "antd";
import React from "react";
import Category from "../../../components/category/Category";

const HomeCategory = () => {
  return (
    <>
      <h3 className="mb-3">KATEGORI PRODUK</h3>
      <Row gutter={[32, 32]}>
          {["BAHAN POKOK", "MAKANAN & MINUMAN", "FASION", "PERLENGKAPAN OLAHRAGA", "KECANTIKAN", "KESEHATAN", "KERAJINAN", "INTERIOR","LAINNYA"].map((v, i)=>(
              <Col lg={8}><Category title={v} key={i}/></Col>
          ))}
      </Row>
    </>
  );
};

export default HomeCategory;
