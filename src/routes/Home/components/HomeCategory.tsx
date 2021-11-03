import { ThunderboltOutlined } from "@ant-design/icons";
import React from "react";
import "./category.css";
import { useSelector } from "react-redux";
import Category from "../../../components/category/Category";
import { RootState } from "../../../models/RootState";

import Flicking from "@egjs/react-flicking";

const HomeCategory = () => {
  const categories = useSelector((state: RootState) => state.categories);

  return (
    <>
      <div className=" mb-2 peb-dflex-between product-title-tags">
        <h3 style={{ margin: 0 }}>
          <ThunderboltOutlined /> KATEGORI
        </h3>
      </div>
      <Flicking circular={true}>
        {categories?.data?.data?.data?.map((v: any, i: any) => (
          <>
            <div key={i} style={{ margin: "0px 10px" }}>
              <Category title={v.nama_klasifikasi} key={i} idCategory={v.id} />
            </div>
          </>
        ))}
      </Flicking>
    </>
  );
};

export default HomeCategory;
