import { Button, Statistic } from "antd";
import React from "react";
import "../styles/base.scss";
import history from "../utils/history";

type Props = {
  data: any;
};
const Product: React.FC<Props> = ({ data }) => {
  const goTo = (id:any) => {
    history.push("/product/"+id);
  };
  return (
    <div className="peb-card-2 product peb-shadow">
      <div className="peb-card-2-product-image">
        <img src="https://th.bing.com/th/id/OIP.kqoYKb0_m_8VCpD0Ev1pQgHaFM?pid=ImgDet&w=570&h=400&rs=1"/>
      </div>
      <div className="peb-card-2-body p-2">
        <Statistic
          title={data.nama_produk}
          value={Number(data.harga_produk)}
          valueRender={(text)=>(<>RP.{text}</>)}
        />
      </div>
      <div className="peb-card-2-footer">
        <Button onClick={()=>goTo(data.id)} className="product-button" type="primary" block>
          LIHAT
        </Button>
      </div>
    </div>
  );
};

export default Product;
