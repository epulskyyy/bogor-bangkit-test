import { TagsOutlined } from "@ant-design/icons";
import { Affix, Col, Row } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../../../components/Product";
import { RootState } from "../../../models/RootState";

export default function OtherProduct() {
  const { data, data2, dataId } = useSelector(
    (state: RootState) => state.product
  );
  return (
    <div style={{ marginTop: "50px" }}>
      <Affix offsetTop={82}>
        <div className="mt-3 mb-2 peb-dflex-between product-title-tags">
          <h3 style={{ margin: 0 }}>
            <TagsOutlined /> PRODUK LAIN
          </h3>
          <Link
            className=""
            to={{
              search: `category=&per_page=10&sort=&product_name=&umkm=${
                dataId.data?.id_user || ""
              }&page=${1}`,
              pathname: "/search",
            }}
          >
            Lihat Semua
          </Link>
        </div>
      </Affix>
      <Row gutter={[16, 16]}>
        {data?.data?.map((v: any, i: any) => (
          <Col xl={4} lg={6} md={6} sm={6} xs={12} key={i}>
            <Product data={v} />
          </Col>
        ))}
      </Row>
      <Affix offsetTop={82}>
        <div className="mt-3 mb-2 peb-dflex-between product-title-tags">
          <h3 style={{ margin: 0 }}>
            <TagsOutlined /> PRODUK SERUPA
          </h3>
          <Link
            className=""
            to={{
              search: `category=${
                dataId.data?.id_klasifikasi || ""
              }&per_page=10&sort=&product_name=&umkm=&page=${1}`,
              pathname: "/search",
            }}
          >
            Lihat Semua
          </Link>
        </div>
      </Affix>
      <Row gutter={[16, 16]}>
        {data2?.data?.map((v: any, i: any) => (
          <Col xl={4} lg={6} md={6} sm={6} xs={12} key={i}>
            <Product data={v} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
