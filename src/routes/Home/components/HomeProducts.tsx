import React from "react";
import { Affix, Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";
import Product from "../../../components/Product";
import { TagsOutlined } from "@ant-design/icons";

type Props = {
  title: string;
  data: any;
};

const HomeProducts: React.FC<Props> = ({ title, data }) => {
  return (
    <>
      <Affix offsetTop={62}>
        <div className="mt-3 mb-2 peb-dflex-between product-title-tags">
          <h3 style={{ margin: 0 }}>
            <TagsOutlined /> {title}
          </h3>
          <Link className="" to="/search">
            Lihat Semua
          </Link>
        </div>
      </Affix>
      <Row gutter={[16, 16]}>
        {data?.data?.data?.map((v: any, i: any) => (
          <Col xl={6} lg={6} md={8} sm={6} xs={12} key={i}>
            <Product data={v} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeProducts;
