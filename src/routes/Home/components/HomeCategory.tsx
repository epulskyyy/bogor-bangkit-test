import { Col, Divider, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Category from "../../../components/category/Category";
import { RootState } from "../../../models/RootState";

const HomeCategory = () => {
  const categories = useSelector((state: RootState) => state.categories);
 
  return (
    <>
    <Divider orientation="left" className="peb-text-bold">KATEGORI PRODUK</Divider>
      <Row gutter={[32, 32]}>
        {categories?.data?.data?.data?.map((v: any, i: any) => (
          <Col xl={6} lg={6} md={8} sm={8} xs={12}>
            <Category title={v.nama_klasifikasi} key={i} idCategory={v.id}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeCategory;
