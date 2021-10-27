import { Button, Statistic } from "antd";
import React from "react";
import "../styles/base.scss";
import history from "../utils/history";
import noImage from "../assets/img/peb-product-noimage.jpg";

type Props = {
  data: any;
};
const Product: React.FC<Props> = ({ data }) => {
  let urlImage: string = "";
  for (const key in data?.url_gambar) {
    if (Object.prototype.hasOwnProperty.call(data?.url_gambar, key)) {
      const element = data?.url_gambar[key];
      if (element !== "") {
        urlImage = element;
        break;
      }
    }
  }
  const goTo = (id: any) => {
    history.push("/product/" + id);
  };
  return (
    <div className="peb-card-2 product peb-shadow">
      <div className="peb-card-2-product-image">
        <img
          alt="gambar produk"
          className="peb-img-responsive"
          src={urlImage || noImage}
        />
      </div>
      <div className="peb-card-2-body p-2">
        <Statistic
          title={data.nama_produk}
          value={Number(data.harga_produk)}
          valueRender={(text) => (
            <h3 className="peb-product-price-text">RP.{text}</h3>
          )}
        />
      </div>
      <div className="peb-card-2-footer">
        <Button
          onClick={() => goTo(data.id)}
          className="product-button"
          type="primary"
          block
        >
          LIHAT
        </Button>
      </div>
    </div>
  );
};

export default Product;
