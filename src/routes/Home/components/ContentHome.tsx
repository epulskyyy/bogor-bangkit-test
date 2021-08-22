import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Product from "../../../components/Product";
import HomeCategory from "./HomeCategory";
import HomeProducts from "./HomeProducts";

const ContentHome = () => {
  return (
    <>
      <HomeProducts title="PRODUK TERLARIS"/>
      <HomeProducts title="PRODUK TERBARU"/>
      <HomeCategory/>
    </>
  );
};

export default ContentHome;
