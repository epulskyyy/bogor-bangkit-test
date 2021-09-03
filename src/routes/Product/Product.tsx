import React, { useEffect } from "react";

import { Layout } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import BreadCrumb from "./components/BreadCrumb";
import Content from "./components/Content";
import "./styles/styles.scss";
import "../../styles/base.scss";
import { useDispatch } from "react-redux";
import { getProductByIDRequest } from "../../actions/product";
import { useParams } from "react-router";

export default function Product() {
  const dispatch = useDispatch()
  const { id }:any = useParams();
  useEffect(() => {
    dispatch(getProductByIDRequest(id))
  }, [])
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
