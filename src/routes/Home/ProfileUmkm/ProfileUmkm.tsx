/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "../components/Container";
import {
  PageHeader,
  Button,
  Row,
  Tabs,
  Col,
  List,
  Tooltip,
  Divider,
} from "antd";
import { LinkOutlined, WechatOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";

import IcShopee from "../../../assets/peb-shopee.svg";
import IcTokped from "../../../assets/peb-tokped.svg";
import IcLazada from "../../../assets/peb-lazada.svg";
import IcWhatsapp from "../../../assets/peb-whatsapp.svg";
import IcFb from "../../../assets/peb-fb.svg";
import IcIg from "../../../assets/peb-ig.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/RootState";
import { useEffect, useState } from "react";
import { getUserByIdRequest } from "../../../actions/user";
import { capitalize } from "../../../utils/utils";
import IcBukalapak from "../../../assets/peb-bukalapak.svg";

const { TabPane } = Tabs;

type Props = {
  authedData?: any;
};
const ProfileUmkm: React.FC<Props> = ({ authedData }) => {
  const product = useSelector((state: RootState) => state.product);

  const { id }: any = useParams();

  const routes = [
    {
      path: "/",
      breadcrumbName: "Beranda",
    },
    {
      path: "/umkm",
      breadcrumbName: "UMKM",
    },
    {
      path: "",
      breadcrumbName: "Nama Usaha",
    },
  ];

  function callback(key: any) {
    console.log(key);
  }
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.user);

  const [copy, setcopy] = useState(false);

  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setcopy(false);
      }, 300);
    }
  }, [copy]);
  const onCopy = () => {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("value", document.URL);
    dummy.select();
    document.execCommand("copy");
    dummy.remove();
    setcopy(true);
  };
  useEffect(() => {
    dispatch(getUserByIdRequest(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openWhatsapp = (no_hp: any) => {
    window.open(`https://wa.me/${no_hp}`, "_blank");
  };
  const content = (
    <>
      <Row>
        <Col xl={3}>
          <div className="">
            {data.data?.no_hp ? (
              <Button
                type="link"
                icon={<img alt="" src={IcWhatsapp} />}
                size="middle"
                onClick={() => openWhatsapp(data.data?.no_hp)}
              >
                {data.data?.no_hp}
              </Button>
            ) : null}
          </div>
        </Col>
      </Row>
      <List itemLayout="horizontal">
        <List.Item>
          <List.Item.Meta
            title="Nomor Usaha"
            description={data.data?.umkm_detail?.no_regis_umkm}
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title="Alamat Usaha"
            description={data.data?.umkm_detail?.alamat_umkm}
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title="Klasifikasi Usaha"
            description={data.data?.umkm_detail?.klasifikasi_umkm}
          />
        </List.Item>
      </List>
      <h3>Sosial Media</h3>
      {data.data?.umkm_detail ? (
        <div className="peb-umkm-modal-social">
          {data.data?.umkm_detail?.instagram !== "" ? (
            <Tooltip placement="top" title={"instagrem"}>
              <a
                href={`${data.data?.umkm_detail?.instagram}`}
                target="_blank"
                className="peb-link-social mr-1"
              >
                {" "}
                <img alt="" src={IcIg} />
              </a>
            </Tooltip>
          ) : null}
          {data.data?.umkm_detail?.facebook !== "" ? (
            <Tooltip placement="top" title={"facebook"}>
              <a
                href={`${data.data?.umkm_detail?.facebook}`}
                target="_blank"
                className="peb-link-social mr-1"
              >
                {" "}
                <img alt="" src={IcFb} />
              </a>
            </Tooltip>
          ) : null}
        </div>
      ) : (
        "-"
      )}
      <h3>E-commerce</h3>
      {data.data?.umkm_detail ? (
        <div className="peb-umkm-modal-social">
          {data.data?.umkm_detail?.shopee_url !== "" ? (
            <Tooltip placement="top" title={"shopee"}>
              <a
                href={data.data?.umkm_detail?.shopee_url}
                className="peb-link-social mr-1"
              >
                <img alt="" src={IcShopee} />
              </a>
            </Tooltip>
          ) : null}

          {data.data?.umkm_detail?.tokped_url !== "" ? (
            <Tooltip placement="top" title={"tokopedia"}>
              <a
                href={data.data?.umkm_detail?.tokped_url}
                className="peb-link-social mr-1"
              >
                <img alt="" src={IcTokped} />
              </a>
            </Tooltip>
          ) : null}

          {data.data?.umkm_detail?.lazada_url !== "" ? (
            <Tooltip placement="top" title={"lazada"}>
              <a
                href={data.data?.umkm_detail?.lazada_url}
                className="peb-link-social mr-1"
              >
                <img alt="" src={IcLazada} />
              </a>
            </Tooltip>
          ) : null}

          {data.data?.umkm_detail?.bukalapak_url !== "" ? (
            <Tooltip placement="top" title={"bukalapak"}>
              <a
                href={data.data?.umkm_detail?.bukalapak_url}
                className="peb-link-social mr-1"
              >
                <img alt="" src={IcBukalapak} />
              </a>
            </Tooltip>
          ) : null}
        </div>
      ) : (
        "-"
      )}
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
          title={capitalize(data.data?.nama_umkm)}
          className="site-page-header"
          //   subTitle="This is a subtitle"
          tags={
            <>
              {authedData && authedData.user_id !== data?.data?.id ? (
                <Link
                  to={{
                    pathname: "/chat",
                    state: {
                      email: data.data?.email,
                      id: data.data?.id,
                      namaUmkm: data.data?.nama_umkm,
                    },
                  }}
                >
                  <Button type="link" icon={<WechatOutlined />} size="middle">
                    Chat
                  </Button>
                </Link>
              ) : null}
              <Button
                onClick={onCopy}
                className={`peb-product-share ${copy ? "copied" : ""}`}
                type="link"
                icon={<LinkOutlined />}
                size="middle"
              >
                Bagikan
              </Button>
            </>
          }
          avatar={{
            src: data.data?.profil_gambar,
          }}
          breadcrumb={{ routes }}
        >
          <Content>{content}</Content>
        </PageHeader>
      </div>
    </Container>
  );
};

export default ProfileUmkm;
