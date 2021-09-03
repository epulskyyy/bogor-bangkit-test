import React from "react";

import { Layout } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import BreadCrumb from "./components/BreadCrumb";
import Content from "./components/Content";
import "./styles/styles.scss";
import "../../styles/base.scss";

export default function Product() {
  return (
    <Layout title="Detail Product">
      <Header />
      <div className="container mt-2 mb-2">
        <BreadCrumb />
        <Content />
      </div>
      <Footer />
    </Layout>
  );
}
