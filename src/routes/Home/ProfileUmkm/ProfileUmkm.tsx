/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "../components/Container";
import { PageHeader, Button, Row, Tabs, Col } from "antd";
import { LinkOutlined, WechatOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import IcShopee from "../../../assets/peb-shopee.svg";
import IcTokped from "../../../assets/peb-tokped.svg";
import IcLazada from "../../../assets/peb-lazada.svg";
import IcWhatsapp from "../../../assets/peb-whatsapp.svg";
import IcFb from "../../../assets/peb-fb.svg";
import IcIg from "../../../assets/peb-ig.svg";
import Product from "../../../components/Product";
import { useSelector } from "react-redux";
import { RootState } from "../../../models/RootState";

const { TabPane } = Tabs;

export default function ProfileUmkm() {
  const product = useSelector((state: RootState) => state.product);

  const routes = [
    {
      path: "index",
      breadcrumbName: "Beranda",
    },
    {
      path: "first",
      breadcrumbName: "UMKM",
    },
    {
      path: "second",
      breadcrumbName: "Nama Usaha",
    },
  ];

  function callback(key: any) {
    console.log(key);
  }

  const content = (
    <>
      <Tabs defaultActiveKey="info-umkm" onChange={callback}>
        <TabPane tab="Info UMKM" key="info-umkm">
          <Row>
            <Col xl={3}>
              <div className="peb-dflex-column">
                <a href="#" className="peb-link-whatsapp">
                  {" "}
                  <img alt="" src={IcWhatsapp} /> 089123123123
                </a>
                <a href="#" className="peb-link-whatsapp">
                  {" "}
                  <img alt="" src={IcWhatsapp} /> 089123123123
                </a>
              </div>
            </Col>
            <Col xl={21}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi beatae unde alias veritatis autem obcaecati culpa odit
              quod blanditiis totam cumque corporis explicabo, incidunt mollitia
              aliquid suscipit commodi voluptatem quas.
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Sosial Media & Marketplace" key="1">
          <div className="peb-marketplace mt-2">
            <a href="#" className="peb-link-social mr-1">
              <img alt="" src={IcFb} />
            </a>
            <a href="#" className="peb-link-social mr-1">
              <img alt="" src={IcIg} />
            </a>
            <a href="#" className="peb-link-social mr-1">
              <img alt="" src={IcShopee} />
            </a>
            <a href="#" className="peb-link-social mr-1">
              <img alt="" src={IcTokped} />
            </a>
            <a href="#" className="peb-link-social mr-1">
              <img alt="" src={IcLazada} />
            </a>
          </div>
        </TabPane>
        <TabPane tab="Produk UMKM" key="2">
          <Row gutter={[32, 32]}>
            {product?.dataCount?.data?.data?.map((v: any, i: any) => (
              <Col lg={6} key={i}>
                <Product data={v} />
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </>
  );

  const Content = ({ children, extraContent }: any) => (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
  return (
    <Container title="Profil UMKM">
      <div className="container ">
        <PageHeader
          title="Nama Usaha"
          className="site-page-header"
          //   subTitle="This is a subtitle"
          tags={
            <>
              <Link to="">
                <Button type="link" icon={<WechatOutlined />} size="middle">
                  Chat
                </Button>
              </Link>
              <Button type="link" icon={<LinkOutlined />} size="middle">
                Bagikan
              </Button>
            </>
          }
          avatar={{
            src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
          }}
          breadcrumb={{ routes }}
        >
          <Content>{content}</Content>
        </PageHeader>
      </div>
    </Container>
  );
}
