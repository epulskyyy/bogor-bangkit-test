import { Col, Row } from "antd";
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
      <h3
        style={{ backgroundColor: "white" }}
        //   orientation="left"
        className="peb-text-bold pt-2 pb-2"
      >
        Produk Lain
      </h3>
      <Row gutter={[16, 16]}>
        {data?.data?.map((v: any, i: any) => (
          <Col xl={4} lg={6} md={6} sm={6} xs={12} key={i}>
            <Product data={v} />
          </Col>
        ))}
      </Row>
      <div className="mt-3 mb-3 peb-text-center">
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
      <h3
        style={{ backgroundColor: "white" }}
        //   orientation="left"
        className="peb-text-bold pt-2 pb-2"
      >
        Produk Serupa
      </h3>
      <Row gutter={[16, 16]}>
        {data2?.data?.map((v: any, i: any) => (
          <Col xl={4} lg={6} md={6} sm={6} xs={12} key={i}>
            <Product data={v} />
          </Col>
        ))}
      </Row>
      <div className="mt-3 mb-3 peb-text-center">
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
    </div>
  );
}
