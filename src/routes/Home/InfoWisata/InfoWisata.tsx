import { RocketOutlined } from "@ant-design/icons";
import {
  Affix,
  Breadcrumb,
  Card,
  Col,
  Empty,
  Form,
  Input,
  Pagination,
  Row,
  Spin,
} from "antd";
import Search from "antd/lib/input/Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getInfoWisataRequest } from "../../../actions/infoWisata";
import { RootState } from "../../../models/RootState";
import noImage from "../../../assets/img/peb-product-noimage.jpg";
import history from "../../../utils/history";
import { capitalize } from "../../../utils/utils";
import Container from "../components/Container";
import { relative } from "path/posix";

const { Meta } = Card;
type Props = {
  authedData?: any;
};
const InfoWisata: React.FC<Props> = ({ authedData }) => {
  const infoWisata = useSelector((state: RootState) => state.infoWisata);
  const dispatch = useDispatch();
  const [searchInput, setsearchInput] = useState({ name: "", location: "" });
  const onChangeSearch = (v: any) => {
    setsearchInput((s) => (s = { ...s, [v.target.name]: v.target.value }));
  };
  const [opacity, setOpacity] = useState("0.4");
  const onSearch = (v: any) => {
    dispatch(
      getInfoWisataRequest({
        perPage: infoWisata.data?.per_page,
        page: infoWisata.data?.current_page,
        name: searchInput.name,
        location: searchInput.location,
      })
    );
  };
  const onFilter = (page: any, perPage: any) => {
    dispatch(
      getInfoWisataRequest({
        perPage,
        page,
        name: searchInput.name,
        location: searchInput.location,
      })
    );
  };

  useEffect(() => {
    dispatch(
      getInfoWisataRequest({ perPage: 10, page: 1, name: "", location: "" })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const goToDetail = (id: any) => {
    history.push(`/info-wisata/${id}`);
  };
  return (
    <Container title="Info Wisata" authedData={authedData}>
      <div className="container mt-2 mb-2">
        <Affix offsetTop={92}>
          <Breadcrumb style={{ backgroundColor: "white" }}>
            <Breadcrumb.Item>
              <Link to="/">Beranda</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Info Wisata</Breadcrumb.Item>
          </Breadcrumb>
          <div className="product-title-tags peb-dflex-between">
            <h3 style={{ margin: 0 }}>
              <RocketOutlined /> INFO WISATA
            </h3>
          </div>
        </Affix>
        <div className="site-card-wrapper">
          <Form onChange={onChangeSearch} onSubmitCapture={onSearch}>
            <Form.Item style={{ marginBottom: 0 }}>
              <Form.Item
                name="name"
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  maxWidth: "200px",
                }}
              >
                <Input name="name" placeholder="Cari Nama Wisata" />
              </Form.Item>
              <Form.Item
                name="location"
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                  maxWidth: "200px",
                }}
              >
                <Search
                  name="location"
                  className="search-header mb-2"
                  placeholder="Cari Lokasi"
                  onSearch={onSearch}
                />
              </Form.Item>
            </Form.Item>
          </Form>
          <Spin spinning={infoWisata.isLoading} tip="Memuat...">
            {infoWisata.data?.data.length !== 0 ? (
              <Row gutter={[16, 16]}>
                {infoWisata.data?.data?.map((v: any, i: any) => {
                  const images: any = Object.values(v?.url_gambar)?.filter(
                    (v) => v !== ""
                  );
                  return (
                    <Col xl={6} lg={6} md={12} sm={10} xs={24} key={i}>
                      <div
                        onClick={() => goToDetail(v.id)}
                        className="image-cover-container"
                      >
                        <div>
                          <img
                            alt="example"
                            src={
                              images == null || images.length === 0
                                ? noImage
                                : images[0]
                            }
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "10px",
                            }}
                          />

                          {/* <Meta
                          title={capitalize(v.nama_wisata || "")}
                          description={
                            v.lokasi_wisata.length > 30
                              ? v.lokasi_wisata.slice(0, 20) + "..."
                              : v.lokasi_wisata
                          }
                        /> */}
                        </div>
                        <div className="image-cover-card"></div>
                        <div className="image-cover-content">
                          {" "}
                          <label>{capitalize(v.nama_wisata || "")}</label>
                          <label>
                            {v.lokasi_wisata.length > 30
                              ? v.lokasi_wisata.slice(0, 30) + "..."
                              : v.lokasi_wisata}
                          </label>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            ) : (
              <Empty description={<span>Data tidak ada</span>} />
            )}
          </Spin>
        </div>
        <Pagination
          total={infoWisata.data?.data.total_data ?? 0}
          showSizeChanger
          className="mt-3"
          showTotal={(total) => `Total ${total} data`}
          onChange={onFilter}
          current={infoWisata.data?.data.current_page ?? 1}
          defaultPageSize={infoWisata.data?.data.per_page ?? 10}
        />
      </div>
    </Container>
  );
};

export default InfoWisata;
