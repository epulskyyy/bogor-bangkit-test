import { Menu } from "antd";
import {
  TagsOutlined,
  ProfileFilled,
  ArrowLeftOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

const { SubMenu } = Menu;

type Props = {};

const SideBar: React.FC<Props> = () => {
  const loc = useLocation();
  const menus = [
    {
      key: "/",
      icon: <ArrowLeftOutlined />,
      name: "Kembali",
      subMenu: [],
    },
    {
      key: "/dashboard/profile",
      icon: <ProfileFilled />,
      name: "Profil",
      subMenu: [],
    },
    {
      key: "/dashboard/product",
      icon: <TagsOutlined />,
      name: "Produk",
      subMenu: [],
    },
    {
      key: "/dashboard/reset-password",
      icon: <LockOutlined />,
      name: "Reset Kata Sandi",
      subMenu: [],
    },
  ];
  const selectOpen = () => {
    const selectKey = [loc.pathname];
    const openKey = loc.pathname.includes("profile")
      ? ["/sub1"]
      : loc.pathname.includes("produk")
      ? ["/sub2"]
      : [""];
    return { selectKey, openKey };
  };
  return (
    <>
      <Menu
        style={{ height: "100%" }}
        defaultSelectedKeys={selectOpen().selectKey}
        defaultOpenKeys={selectOpen().openKey}
        mode="inline"
        theme="dark"
        inlineCollapsed={true}
      >
        {menus.map((value, key) =>
          value.subMenu.length > 0 ? (
            <SubMenu key={value.key} icon={value.icon} title={value.name}>
              {value?.subMenu?.map((sValue: any, sKey) => (
                <Menu.Item key={sValue.key}>
                  <Link to={sValue.key}>{sValue.name}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={value.key} icon={value.icon}>
              <Link to={value.key}>{value.name}</Link>
            </Menu.Item>
          )
        )}
      </Menu>
    </>
  );
};

export default SideBar;
