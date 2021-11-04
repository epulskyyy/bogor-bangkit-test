import { Typography, Card, Statistic, Button } from "antd";
import React from "react";
import "../styles/base.scss";
import history from "../utils/history";
import noImage from "../assets/img/peb-product-noimage.jpg";
import { formatMoney } from "../utils/utils";
import { Link } from "react-router-dom";
import { SwapRightOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;
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
    <Card hoverable className="product-card" onClick={() => goTo(data.id)}>
      <div className="peb-card-2 product">
        {data?.diskon ? (
          <div className="peb-card-2-product-discount">{data.diskon}%</div>
        ) : null}
        <div className="peb-card-2-product-image">
          <img
            alt="gambar produk"
            className="peb-img-responsive"
            src={urlImage || noImage}
          />
        </div>
        <div className="peb-card-2-body p-2">
          <Statistic
            title={
              <>
                <Paragraph ellipsis>{data.nama_produk.toUpperCase()} </Paragraph>
              </>
            }
            value={Number(data.harga_produk)}
            valueRender={(text) =>
              data?.diskon ? (
                <>
                  <h3 className="peb-product-price-discount">Rp. {text}</h3>
                  <h3 className="peb-product-price-text">
                    RP.{formatMoney(data.harga_setelah_diskon)}
                  </h3>
                </>
              ) : (
                <h3 className="peb-product-price-text">RP.{text}</h3>
              )
            }
          />
        </div>
        <div className="produk-view-title">
          Lihat <SwapRightOutlined />
        </div>
      </div>
    </Card>
  );
};

export default Product;
