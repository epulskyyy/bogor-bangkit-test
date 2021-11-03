import {
  PageHeader,
  Tabs,
  Button,
  Statistic,
  Descriptions,
  List,
  Tooltip,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserByIdRequest } from "../../../actions/user";
import { RootState } from "../../../models/RootState";

import IcShopee from "../../../assets/peb-shopee.svg";
import IcTokped from "../../../assets/peb-tokped.svg";
import IcLazada from "../../../assets/peb-lazada.svg";
import IcWhatsapp from "../../../assets/peb-whatsapp.svg";
import IcFb from "../../../assets/peb-fb.svg";
import IcIg from "../../../assets/peb-ig.svg";
import IcBukalapak from "../../../assets/peb-bukalapak.svg";
import Container from "../components/Container";
import { LinkOutlined, WechatOutlined } from "@ant-design/icons";
import { capitalize } from "../../../utils/utils";
import Map from "./MapPicker";
import Avatar from "antd/lib/avatar/avatar";

const { TabPane } = Tabs;

const openWhatsapp = (no_hp: any) => {
  window.open(`https://wa.me/${no_hp}`, "_blank");
};
const renderContent = (data: any, column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Nomor Whatsapp">
      {data.data?.no_hp ? (
        <Button
          type="link"
          // icon={<img alt="" src={IcWhatsapp} />}
          size="small"
          onClick={() => openWhatsapp(data.data?.no_hp)}
        >
          {" " + data.data?.no_hp}
        </Button>
      ) : null}
    </Descriptions.Item>
    <Descriptions.Item label="Nomor Usaha">
      {data.data?.umkm_detail?.no_regis_umkm}
    </Descriptions.Item>
    <Descriptions.Item label="Klasifikasi Usaha">
      {data.data?.umkm_detail?.klasifikasi_umkm}
    </Descriptions.Item>
    <Descriptions.Item label="Alamat Usaha">
      {data.data?.umkm_detail?.alamat_umkm}
    </Descriptions.Item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: "flex",
      width: "max-content",
      justifyContent: "flex-end",
    }}
  >
    <Statistic
      title="Status"
      value="Pending"
      style={{
        marginRight: 32,
      }}
    />
    <Statistic title="Price" prefix="$" value={568.08} />
  </div>
);

const Content = ({ children, extra }: any) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);

type Props = {
  authedData?: any;
};

const DetailUmkm: React.FC<Props> = ({ authedData }) => {
  const product = useSelector((state: RootState) => state.product);

  const { id }: any = useParams();

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

  return (
    <Container authedData={authedData} title="Profil UMKM">
      <div className="container mb-2">
        <PageHeader
          className="site-page-header-responsive mt-2"
          onBack={() => window.history.back()}
          title={capitalize(data.data?.nama_umkm)}
          extra={[
            authedData && authedData.user_id !== data?.data?.id ? (
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
            ) : null,
            <Button
              onClick={onCopy}
              className={`peb-product-share ${copy ? "copied" : ""}`}
              type="link"
              icon={<LinkOutlined />}
              size="middle"
            >
              Bagikan
            </Button>,
          ]}
          footer={
            <Tabs defaultActiveKey="1">
              <TabPane tab="Sosial Media & E-commerce" key="sosmed">
                {data.data?.umkm_detail ? (
                  <div className="peb-umkm-modal-social mt-2">
                    {data.data?.umkm_detail?.instagram !== "" ? (
                      <Tooltip placement="top" title={"instagrem"}>
                        <a
                          href={`${data.data?.umkm_detail?.instagram}`}
                          target="_blank"
                          className="peb-link-social mr-1 mb-2"
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
                          className="peb-link-social mr-1 mb-2"
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
                <br />
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
              </TabPane>
              <TabPane tab="Legalitas" key="Legalitas">
                {data?.data?.legalitas != null &&
                Array.isArray(data?.data?.legalitas) ? (
                  <List itemLayout="horizontal">
                    {data?.data?.legalitas?.map((v: any, k: any) => (
                      <List.Item>{v}</List.Item>
                    ))}
                  </List>
                ) : data?.data?.legalitas != null ? (
                  <p>{data?.data?.legalitas}</p>
                ) : (
                  <p>Tidak ada informasi</p>
                )}
              </TabPane>
            </Tabs>
          }
          avatar={{
            src: data.data?.profil_gambar,
          }}
        >
          <Content>{renderContent(data)}</Content>
        </PageHeader>
        <Map
          icon={<Avatar src={data.data?.profil_gambar} />}
          data={{
            title: capitalize(data.data?.nama_umkm),
            description: "",
            position: [
              data?.data?.longitude ?? -6.597916984998104,
              data?.data?.latitude ?? 106.79841288409595,
            ],
          }}
        />
      </div>
    </Container>
  );
};

export default DetailUmkm;
