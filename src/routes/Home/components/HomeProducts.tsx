import React from "react";
import { Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";
import Product from "../../../components/Product";
import { useSelector } from "react-redux";
import { RootState } from "../../../models/RootState";

type Props = {
  title: string;
};

const HomeProducts: React.FC<Props> = ({ title }) => {
  const product = useSelector((state: RootState) => state.product);
  return (
    <>
    <Divider orientation="left" className="peb-text-bold">{title}</Divider>
      <Row gutter={[16, 16]}>
        {product?.dataCount?.data?.data?.map((v: any, i: any) => (
          <Col xl={4} lg={6} md={6} sm={6} xs={12} key={i}>
            <Product data={v}/>
          </Col>
        ))}
      </Row>
      <div className="mt-3 mb-3 peb-text-center">
        <Link className="" to="/search">
          Lihat Semua
        </Link>
      </div>
    </>
  );
};

export default HomeProducts;
