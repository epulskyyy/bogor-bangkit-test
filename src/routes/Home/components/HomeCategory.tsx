import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Category from "../../../components/category/Category";
import { RootState } from "../../../models/RootState";

const HomeCategory = () => {
  const categories = useSelector((state:RootState)=> state.categories)
  return (
    <>
      <h3 className="mb-3">KATEGORI PRODUK</h3>
      <Row gutter={[32, 32]}>
          {categories?.data?.data?.map((v :any, i:any)=>(
              <Col lg={8}><Category title={v.nama_klasifikasi} key={i}/></Col>
          ))}
      </Row>
    </>
  );
};

export default HomeCategory;
