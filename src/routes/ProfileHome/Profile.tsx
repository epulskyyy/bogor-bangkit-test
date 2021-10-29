/* eslint-disable react/jsx-no-target-blank */
import "../../styles/base.scss";
import "./styles/styles.scss";
import React, { useEffect } from "react";
import { Layout } from "../../components";
import Header from "../../components/Header";
import { AuthUser } from "../../models/AuthUser";
import Footer from "../../components/footer/Footer";
import { Affix, Card, Col, Divider, List, Row, Tooltip } from "antd";

import IcFb from "../../assets/peb-fb.svg";
import IcIg from "../../assets/peb-ig.svg";
import IcShopee from "../../assets/peb-shopee.svg";
import IcTokped from "../../assets/peb-tokped.svg";
import IcLazada from "../../assets/peb-lazada.svg";
import IcBukalapak from "../../assets/peb-bukalapak.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../models/RootState";
import { getUserByIdRequest } from "../../actions/user";

type Props = {
  authedData?: AuthUser;
};
const Profile: React.FC<Props> = ({ authedData }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    dispatch(getUserByIdRequest(authedData?.user_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout title="Detail Product">
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Affix offsetTop={0}>
          <Header authedData={authedData} />
        </Affix>
        <div className="container mt-2 mb-2">
          <h2>Data Pengguna</h2>
          <Row gutter={[16, 16]}>
            <Col xl={6}>
              <Card className="peb-card-profile" title="NIK">
                {data.data?.nik}
              </Card>
            </Col>
            <Col xl={6}>
              <Card className="peb-card-profile" title="Nama Pelaku Usaha">
                {data.data?.nama_lengkap}
              </Card>
            </Col>
            <Col xl={6}>
              <Card className="peb-card-profile" title="Email">
                {data.data?.email}
              </Card>
            </Col>
            <Col xl={6}>
              <Card className="peb-card-profile" title="Nomor Hp">
                {data.data?.no_hp}
              </Card>
            </Col>
            <Col xl={6}>
              <Card className="peb-card-profile" title="Jenis Kelamin">
                {data.data?.jenis_kelamin}
              </Card>
            </Col>
            <Col xl={6}>
              <Card className="peb-card-profile" title="Nama Usaha">
                {data.data?.nama_umkm}
              </Card>
            </Col>
            <Col xl={6}>
              <Card className="peb-card-profile" title="Legalitas">
                {data.data?.legalitas}
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="peb-card-profile" title="Alamat">
                {data.data?.alamat.alamat_user} RT {data.data?.alamat.rt} RW{" "}
                {data.data?.alamat.rw} Kec. {data.data?.alamat.kecamatan} Kel.{" "}
                {data.data?.alamat.kelurahan}
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="peb-card-profile" title="Detail UMKM">
                <List itemLayout="horizontal">
                  <List.Item>
                    <List.Item.Meta
                      title="Nomor UMKM :"
                      description={data.data?.no_regis_umkm}
                    />
                  </List.Item>
                  <List.Item>
                    <List.Item.Meta
                      title="Alamat UMKM :"
                      description={data.data?.alamat_umkm}
                    />
                  </List.Item>
                  <List.Item>
                    <List.Item.Meta
                      title="Klasifikasi UMKM :"
                      description={data.data?.klasifikasi_umkm}
                    />
                  </List.Item>
                </List>
                <Divider plain>Sosial Media</Divider>
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
                <Divider plain>E-commerce</Divider>
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
              </Card>
            </Col>
          </Row>
        </div>
        <Footer authedData={authedData} />
      </div>
    </Layout>
  );
};

export default Profile;
