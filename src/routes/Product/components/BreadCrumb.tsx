import { ArrowLeftOutlined } from "@ant-design/icons";
import { Affix, Breadcrumb, Button, Menu } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../models/RootState";
import history from "../../../utils/history";
import { capitalize } from "../../../utils/utils";

export default function BreadCrumb() {
  const { dataId } = useSelector((state: RootState) => state.product);
  const categories = useSelector((state: RootState) => state.categories);
  const menu = (
    <Menu>
      {categories?.data?.data?.data?.map((v: any, i: any) => (
        <Menu.Item key={v.nama_klasifikasi}>
          <Link
            to={{
              search: `category=${
                v.id
              }&per_page=10&sort=&product_name=&umkm=&page=${1}`,
              pathname: "/search",
            }}
          >
            {capitalize(v.nama_klasifikasi)}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  const category = categories?.data?.data?.data?.find(
    (v: any, i: any) => v.id === dataId?.data?.id_klasifikasi
  );
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="mb-2">
      <Affix offsetTop={92}>
        <Breadcrumb style={{ backgroundColor: "white" }}>
          <Breadcrumb.Item>
            <Button
              onClick={goBack}
              size="small"
              type="text"
              icon={<ArrowLeftOutlined />}
            />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/">Beranda</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item overlay={menu}>
            {capitalize(category?.nama_klasifikasi || "")}
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {capitalize(dataId?.data?.nama_produk || "")}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Affix>
    </div>
  );
}
