import React from "react";
import { LinkOutlined, WechatOutlined } from "@ant-design/icons";
import { Button, Tabs } from "antd";
import { Link } from "react-router-dom";
import IcShopee from "../../../assets/peb-shopee.svg";
import IcTokped from "../../../assets/peb-tokped.svg";
import IcLazada from "../../../assets/peb-lazada.svg";

const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}

export default function Product() {
  return (
    <div className="peb-product-detail">
      <h3 className="peb-product-detail-name">Nama Product</h3>
      <div className="peb-product-price">
        <h3 className="peb-product-price-">Rp 150.000</h3>
        <div className="peb-">
          <Link to="">
            <Button type="link" icon={<WechatOutlined />} size="middle">
              Chat
            </Button>
          </Link>
          <a>
            <Button type="link" icon={<LinkOutlined />} size="middle">
              copy link
            </Button>
          </a>
        </div>
      </div>
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Detail" key="1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            corporis omnis accusantium quibusdam. Nisi iure corporis numquam
            eaque velit. Facere hic fugiat reiciendis expedita repudiandae,
            asperiores ipsa eveniet commodi neque.
            <div className="peb-marketplace mt-2">
              <a className="peb-link-social mr-1">
                {" "}
                <img src={IcShopee} />
              </a>
              <a className="peb-link-social mr-1">
                {" "}
                <img src={IcTokped} />
              </a>
              <a className="peb-link-social mr-1">
                {" "}
                <img src={IcLazada} />
              </a>
            </div>
          </TabPane>
          <TabPane tab="Info Penting" key="2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            modi assumenda maxime voluptatum ipsam blanditiis. Perspiciatis
            temporibus ratione adipisci numquam tempora officia a, laboriosam
            voluptatem quasi eligendi rem cum ipsum!
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
