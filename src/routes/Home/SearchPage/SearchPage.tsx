/* eslint-disable eqeqeq */
import {
  Affix,
  Breadcrumb,
  Button,
  Card,
  Col,
  Dropdown,
  List,
  Menu,
  Pagination,
  Row,
  Select,
  Spin,
} from "antd";
import Container from "../components/Container";
import Product from "../../../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/RootState";
import { useEffect } from "react";
import { getProducRequest } from "../../../actions/product";
import history from "../../../utils/history";
import { AppstoreOutlined, SearchOutlined } from "@ant-design/icons";
import "../styles/styles.scss";
import "../../../styles/base.scss";
import { useQuery } from "../../../utils/utils";
import { Link } from "react-router-dom";

const { Option } = Select;

type Props = {
  authedData?: any;
};
const SearchPage: React.FC<Props> = ({ authedData }) => {
  const product = useSelector((state: RootState) => state.product);
  const categories = useSelector((state: RootState) => state.categories);
  const data = categories?.data?.data?.data || [];
  let query = useQuery();
  const queryData: any = {
    category_id: query.get("category") || "",
    perPage: query.get("per_page") || "10",
    sort: query.get("sort") || "",
    name: query.get("product_name") || "",
    umkm_id: query.get("umkm") || "",
    page: query.get("page") || "1",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducRequest(queryData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onChangeProduct = (pagination: any, filters?: any, sorter?: any) => {
    dispatch(getProducRequest({ ...queryData, page: pagination }));
    history.push({
      search: `category=${queryData.category_id || ""}&per_page=${
        queryData.perPage || ""
      }&sort=${queryData.sort || ""}&product_name=${
        queryData.name || ""
      }&umkm=${queryData.umkm_id || ""}&page=${pagination || ""}`,
    });
  };

  const onChangeProductPageSize = (perPage: any) => {
    dispatch(getProducRequest({ ...queryData, perPage, page: 1 }));
    history.push({
      search: `category=${queryData.category_id || ""}&per_page=${
        perPage || ""
      }&sort=${queryData.sort || ""}&product_name=${
        queryData.name || ""
      }&umkm=${queryData.umkm_id || ""}&page=${1}`,
    });
  };

  const onChangeProductSort = (sort: any) => {
    dispatch(getProducRequest({ ...queryData, sort, page: 1 }));
    history.push({
      search: `category=${queryData.category_id || ""}&per_page=${
        queryData.perPage || ""
      }&sort=${sort || ""}&product_name=${queryData.name || ""}&umkm=${
        queryData.umkm_id || ""
      }&page=${1}`,
    });
  };

  const onChangeProductCategory = (category_id: any) => {
    dispatch(getProducRequest({ ...queryData, category_id, page: 1 }));
    history.push({
      search: `category=${category_id || ""}&per_page=${
        queryData.perPage || 10
      }&sort=${queryData.sort || ""}&product_name=${
        queryData.name || ""
      }&umkm=${queryData.umkm_id || ""}&page=${1}`,
    });
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Button
          onClick={() => onChangeProductCategory("")}
          type={queryData.category_id == "" ? "primary" : "ghost"}
          block
          className="peb-text-left"
        >
          Semua Produk
        </Button>
      </Menu.Item>
      {data.map((item: any, k: any) => (
        <Menu.Item>
          <Button
            onClick={() => onChangeProductCategory(item.id)}
            type={queryData.category_id == item.id ? "primary" : "ghost"}
            block
            className="peb-text-left"
          >
            {item.nama_klasifikasi}
          </Button>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Container title="Pencarian" authedData={authedData}>
      <div className="container search-page mt-2 mb-2">
        <Affix offsetTop={92}>
          <Breadcrumb style={{ backgroundColor: "white" }}>
            <Breadcrumb.Item>
              <Link to="/">Beranda</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Pencarian</Breadcrumb.Item>
          </Breadcrumb>
          <div className="product-title-tags peb-dflex-between">
            <h3 style={{ margin: 0 }}>
              <SearchOutlined /> PENCARIAN
            </h3>
          </div>
        </Affix>
        <Row gutter={[16, 16]}>
          <Col lg={4} md={6} xs={0}>
            <List style={{ zIndex: 5 }}>
              <List.Item>
                <Button
                  onClick={() => onChangeProductCategory("")}
                  type={queryData.category_id == "" ? "primary" : "ghost"}
                  block
                  className="peb-text-left"
                >
                  Semua Produk
                </Button>
              </List.Item>
              {data.map((item: any, k: any) => (
                <List.Item key={k}>
                  <Button
                    onClick={() => onChangeProductCategory(item.id)}
                    type={
                      queryData.category_id == item.id ? "primary" : "ghost"
                    }
                    block
                    className="peb-text-left"
                  >
                    {item.nama_klasifikasi}
                  </Button>
                </List.Item>
              ))}
            </List>
          </Col>
          <Col lg={20} md={18} sm={24} xs={24}>
            <div className="peb-dropdown-search-page mb-2 peb-dflex-end ">
              <Dropdown
                className="page mt-2 mb-1 side-search-dropdown"
                overlay={menu}
                placement="bottomLeft"
                arrow
                trigger={["click"]}
              >
                <Button
                  type="primary"
                  shape="round"
                  icon={<AppstoreOutlined />}
                >
                  {data.map((item: any, k: any) => {
                    if (item.id == queryData.category_id) {
                      return item.nama_klasifikasi;
                    }
                  })}
                </Button>
              </Dropdown>
            </div>
            <Card
              title={
                <Col lg={24} md={24} sm={0} xs={0}>
                  {queryData.name || ""}
                </Col>
              }
              extra={
                <>
                  <Row gutter={[16, 16]}>
                    <Col lg={12} md={24} sm={24} xs={24}>
                      <Select
                        onSelect={onChangeProductSort}
                        size="small"
                        defaultValue="terbaru"
                        style={{ display: "block" }}
                      >
                        <Option value="terbaru"> Terbaru </Option>
                        <Option value="termurah"> Termurah </Option>
                        <Option value="termahal"> Termahal </Option>
                      </Select>
                    </Col>
                    <Col lg={12} md={24} sm={24} xs={24}>
                      <Select
                        onSelect={onChangeProductPageSize}
                        size="small"
                        defaultValue={queryData.perPage || "10"}
                        style={{ display: "block" }}
                      >
                        <Option value="20"> 20/halaman </Option>
                        <Option value="10"> 10/halaman </Option>
                      </Select>
                    </Col>
                  </Row>
                </>
              }
            >
              <Spin spinning={product.isLoading} tip="Memuat...">
                <Row gutter={[16, 16]}>
                  {product?.data?.data?.map((v: any, i: any) => (
                    <Col lg={6} md={8} sm={12} xs={12} key={i}>
                      <Product data={v} />
                    </Col>
                  ))}
                </Row>
              </Spin>
              <Pagination
                className="mt-3"
                onChange={onChangeProduct}
                total={product?.data?.total_data}
                current={Number(queryData?.page) ?? 1}
                defaultPageSize={queryData?.perPage ?? 10}
                showSizeChanger={false}
                showTotal={(total) => `Total ${total} produk`}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default SearchPage;
