import React from "react";
import { Breadcrumb, Menu } from "antd";
import { Link, useHistory } from "react-router-dom";

export default function BreadCrumb() {
  const menu = (
    <Menu>
      {[
        "BAHAN POKOK",
        "MAKANAN & MINUMAN",
        "FASION",
        "PERLENGKAPAN OLAHRAGA",
        "KECANTIKAN",
        "KESEHATAN",
        "KERAJINAN",
        "INTERIOR",
        "LAINNYA",
      ].map((v, i) => (
        <Menu.Item key={v}>
          <Link to="">{v}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className="mb-2">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item overlay={menu} >Bahan Pokok</Breadcrumb.Item>
        <Breadcrumb.Item>Nama produk</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
