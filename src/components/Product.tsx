import { Button } from "antd";
import React from "react";
import "../styles/base.scss";
import history from "../utils/history";

const Product = () => {
  const goTo =()=>{
    history.push("/product")
  }
  return (
    <div className="peb-card-2 product peb-shadow">
      <div className="peb-card-2-product-image"></div>
      <div className="peb-card-2-body p-2">
        <label className="product-name">Nama product</label>
        <h3 className="price">RP 120.000</h3>
      </div>
      <div className="peb-card-2-footer">
        <Button onClick={goTo} className="product-button" type="primary" block>
            LIHAT
        </Button>
      </div>
    </div>
  );
};

export default Product;
