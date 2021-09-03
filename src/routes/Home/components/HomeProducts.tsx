import React from "react";
import { Col, Row } from "antd";
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
      <h3 className="mb-3">{title}</h3>
      <Row gutter={[32, 32]}>
        {product?.dataCount?.data?.data?.map((v: any, i: any) => (
          <Col lg={6} key={i}>
            <Product data={v}/>
          </Col>
        ))}
      </Row>
      <div className="mt-3 mb-3 peb-text-center">
        <Link className="" to="product">
          Lihat Semua
        </Link>
      </div>
    </>
  );
};

export default HomeProducts;
