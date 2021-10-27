import { Breadcrumb, Menu } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../models/RootState";

export default function BreadCrumb() {
  const { dataId } = useSelector((state: RootState) => state.product);
  const categories = useSelector((state: RootState) => state.categories);
  const menu = (
    <Menu>
      {categories?.data?.data?.data?.map((v: any, i: any) => (
        <Menu.Item key={i}>
          <Link
            to={{
              search: `category=${
                v.id
              }&per_page=10&sort=&product_name=&umkm=&page=${1}`,
              pathname: "/search",
            }}
          >
            {v.nama_klasifikasi}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  const category = categories?.data?.data?.data?.find(
    (v: any, i: any) => v.id === dataId?.data?.id_klasifikasi
  );
  return (
    <div className="mb-2">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item overlay={menu}>
          {category?.nama_klasifikasi}
        </Breadcrumb.Item>
        <Breadcrumb.Item>{dataId?.data?.nama_produk}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
