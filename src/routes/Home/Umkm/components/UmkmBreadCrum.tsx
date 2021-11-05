import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function UmkmBreadCrumb() {
  return (          
  <Breadcrumb style={{ backgroundColor: "white" }}>
      <Breadcrumb.Item>
        <Link to="/">Beranda</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Daftar UMKM</Breadcrumb.Item>
    </Breadcrumb>
  );
}
