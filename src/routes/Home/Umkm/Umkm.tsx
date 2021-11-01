/* eslint-disable react/jsx-no-target-blank */
import { WechatOutlined } from "@ant-design/icons";
import {
  Card,
  Row,
  Pagination,
  Select,
  Spin,
  Button,
  Tooltip,
  Divider,
  Tag,
  Col,
  Typography,
  Avatar,
} from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserRequest } from "../../../actions/user";
import { RootState } from "../../../models/RootState";
import Container from "../components/Container";
import "./styles/styles.scss";
import IcWhatsapp from "../../../assets/peb-whatsapp.svg";
import IcFb from "../../../assets/peb-fb.svg";
import IcIg from "../../../assets/peb-ig.svg";
import IcShopee from "../../../assets/peb-shopee.svg";
import IcTokped from "../../../assets/peb-tokped.svg";
import IcLazada from "../../../assets/peb-lazada.svg";
import IcBukalapak from "../../../assets/peb-bukalapak.svg";
import history from "../../../utils/history";
import { Link } from "react-router-dom";
import noImage from "../../../assets/img/peb-product-noimage.jpg";

const { Paragraph } = Typography;

const { Option } = Select;
type Props = {
  authedData?: any;
};
const Umkm: React.FC<Props> = ({ authedData }) => {
  const { datas, isLoading } = useSelector((state: RootState) => state.user);
  const [perPage, setperPage] = useState(10);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserRequest(perPage, "active", page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filterPerPage = (v: any) => {
    setperPage(v);
    dispatch(getAllUserRequest(v, "active", page));
  };
  const onChangePage = (pagination: any, filters?: any, sorter?: any) => {
    setPage(pagination);
    dispatch(getAllUserRequest(perPage, "active", pagination));
  };
  const openWhatsapp = (no_hp: any) => {
    window.open(`https://wa.me/${no_hp}`, "_blank");
  };

  const goTo = (item: any) => {
    history.push({
      pathname: "/umkm/" + item,
    });
  };
  return (
    <Container title="Daftar UMKM" authedData={authedData}>
      <div className="container mt-2 mb-2">
        <Card
          title="Daftar UMKM"
          extra={
            <>
              <Select
                onSelect={filterPerPage}
                size="small"
                value={perPage}
                style={{ width: 100 }}
              >
                <Option value={10}> 10/halaman </Option>
                <Option value={20}> 20/halaman </Option>
              </Select>
            </>
          }
        >
          <div className="site-card-wrapper">
            <Spin spinning={isLoading ?? false} tip="Memuat...">
              <Row gutter={[16, 16]}>
                {datas?.data?.data.map((item: any) => (
                  <Col xl={6} lg={6} md={12} sm={24} xs={24}>
                    <Card hoverable>
                      <Avatar
                        className="mb-2"
                        src={item.profil_gambar || noImage}
                      />
                      <Paragraph ellipsis>
                        <h3>{item?.nama_umkm}</h3>{" "}
                      </Paragraph>
                      <div className="peb-umkm-modal-header-one">
                        <div className="peb-umkm-modal-header-one-chat">
                          {authedData && authedData.user_id !== item?.id ? (
                            <Link
                              to={{
                                pathname: "/chat",
                                state: {
                                  email: item?.email,
                                  id: item?.id,
                                  namaUmkm: item?.nama_umkm,
                                },
                              }}
                            >
                              <Button
                                type="link"
                                icon={<WechatOutlined />}
                                size="middle"
                              >
                                Pesan
                              </Button>
                            </Link>
                          ) : null}
                          {item?.no_hp ? (
                            <Tooltip placement="left" title={item?.no_hp}>
                              <Button
                                type="link"
                                icon={<img alt="" src={IcWhatsapp} />}
                                size="middle"
                                onClick={() => openWhatsapp(item?.no_hp)}
                              ></Button>
                            </Tooltip>
                          ) : null}
                        </div>
                      </div>
                      <div className="peb-umkm-modal-detail">
                        <Tag color="cyan">
                          {item?.umkm_detail?.klasifikasi_umkm}
                        </Tag>
                        <Paragraph ellipsis>
                          <p>{item?.umkm_detail?.alamat_umkm}</p>
                        </Paragraph>
                      </div>
                      <Divider plain>Sosial Media</Divider>
                      {item?.umkm_detail ? (
                        <div className="peb-umkm-modal-social">
                          {item?.umkm_detail?.instagram !== "" ? (
                            <Tooltip placement="top" title={"instagrem"}>
                              <a
                                href={`${item?.umkm_detail?.instagram}`}
                                target="_blank"
                                className="peb-link-social mr-1 "
                              >
                                <img alt="" src={IcIg} className="mb-1" />
                              </a>
                            </Tooltip>
                          ) : null}
                          {item?.umkm_detail?.facebook !== "" ? (
                            <Tooltip placement="top" title={"facebook"}>
                              <a
                                href={`${item?.umkm_detail?.facebook}`}
                                target="_blank"
                                className="peb-link-social mr-1 "
                              >
                                <img alt="" src={IcFb} className="mb-1" />
                              </a>
                            </Tooltip>
                          ) : null}
                        </div>
                      ) : (
                        "-"
                      )}
                      <Divider plain>E-commerce</Divider>
                      {item?.umkm_detail ? (
                        <div className="peb-umkm-modal-social">
                          {item?.umkm_detail?.shopee_url !== "" ? (
                            <Tooltip placement="top" title={"shopee"}>
                              <a
                                href={item?.umkm_detail?.shopee_url}
                                className="peb-link-social mr-1 "
                              >
                                <img alt="" src={IcShopee} className="mb-1" />
                              </a>
                            </Tooltip>
                          ) : null}

                          {item?.umkm_detail?.tokped_url !== "" ? (
                            <Tooltip placement="top" title={"tokopedia"}>
                              <a
                                href={item?.umkm_detail?.tokped_url}
                                className="peb-link-social mr-1 "
                              >
                                <img alt="" src={IcTokped} className="mb-1" />
                              </a>
                            </Tooltip>
                          ) : null}

                          {item?.umkm_detail?.lazada_url !== "" ? (
                            <Tooltip placement="top" title={"lazada"}>
                              <a
                                href={item?.umkm_detail?.lazada_url}
                                className="peb-link-social mr-1 "
                              >
                                <img alt="" src={IcLazada} className="mb-1" />
                              </a>
                            </Tooltip>
                          ) : null}

                          {item?.umkm_detail?.bukalapak_url !== "" ? (
                            <Tooltip placement="top" title={"bukalapak"}>
                              <a
                                href={item?.umkm_detail?.bukalapak_url}
                                className="peb-link-social mr-1 "
                              >
                                <img
                                  alt=""
                                  src={IcBukalapak}
                                  className="mb-1"
                                />
                              </a>
                            </Tooltip>
                          ) : null}
                        </div>
                      ) : (
                        "-"
                      )}
                      <Button
                        block
                        type="primary"
                        onClick={() => goTo(item.id)}
                      >
                        Lihat
                      </Button>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Spin>
          </div>

          <Pagination
            className="mt-3"
            onChange={onChangePage}
            total={datas?.data.total_data ?? 0}
            showSizeChanger={false}
            current={datas?.data.current_page ?? 1}
            defaultPageSize={perPage ?? 2}
            showTotal={(total) => `Total ${total} UMKM`}
          />
        </Card>
      </div>
    </Container>
  );
};
export default Umkm;
