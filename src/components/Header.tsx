import { Avatar, Button, Dropdown, Menu, Tooltip } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  DownOutlined,
  LogoutOutlined,
  MailOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import "../styles/base.scss";
import { useDispatch, useSelector } from "react-redux";
import { LogoutRequest } from "../actions/auth";
import SearchComp from "./Search";
import { AuthUser } from "../models/AuthUser";
import UserImage from "../assets/peb-user.svg";
import HeaderDrawer from "./HeaderDrawer";
import { getCategoriesRequest } from "../actions/categories";
import { RootState } from "../models/RootState";
import { capitalize } from "../utils/utils";
import history from "../utils/history";
import Logo from "./Logo/Logo";

type Props = {
  authedData?: AuthUser;
};

const Header: React.FC<Props> = ({ authedData }) => {
  const dispatch = useDispatch();
  const user = authedData ?? false;
  const access_token = localStorage.getItem("access_token");
  const categories = useSelector((state: RootState) => state.categories);

  const logout = () => {
    const data = {
      token: access_token,
    };
    dispatch(LogoutRequest({ token: data }));
  };

  useEffect(() => {
    dispatch(getCategoriesRequest({ perPage: 99, page: 1 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onGo = (to: string) => {
    history.push(to);
  };
  const menu = (
    <Menu>
      {categories?.data?.data?.data?.map((v: any, i: any) => (
        <Menu.Item key={v}>
          <Link
            to={`search?category=${
              v.id
            }&per_page=${10}&sort=&product_name=&umkm=&page=${1}`}
          >
            {capitalize(v.nama_klasifikasi, true)}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  const userMenu = (
    <Menu>
      <Menu.Item>{authedData?.username}</Menu.Item>
      <Menu.Item>
        <Button
          icon={<ProfileOutlined />}
          type="link"
          onClick={() => onGo("/profile/" + authedData?.user_id)}
        >
          Data Pengguna
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button
          icon={<AppstoreOutlined />}
          type="link"
          onClick={() => onGo("/dashboard")}
        >
          Dashboard
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button icon={<LogoutOutlined />} type="link" onClick={logout}>
          Keluar
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="peb-navbar">
      <div className="peb-navbar-top">
        <div className="peb-navbar-top-logo">
          <Logo size="small" />
        </div>
        <div className="peb-navbar-top-wrap">
          <SearchComp />
          <ul className="peb-list peb-list-flex ml-2 mr-2">
            <li className="mr-2">
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <Button
                  type="primary"
                  className="peb-dropdown"
                  onClick={(e) => e.preventDefault()}
                >
                  Kategori <DownOutlined />
                </Button>
              </Dropdown>
            </li>
            {user ? (
              <>
                <li>
                  <Tooltip placement="bottom" title="Pesan">
                    <Button
                      type="primary"
                      onClick={() => history.push("/chat")}
                    >
                      <MailOutlined />
                    </Button>
                  </Tooltip>
                </li>
              </>
            ) : null}
          </ul>
          <div className="peb-navbar-top-btn-drawer ml-2 peb-dflex-center">
            <HeaderDrawer authedData={authedData} logout={logout} />
          </div>
        </div>
        {user ? (
          <Dropdown
            className="peb-navbar-user"
            overlay={userMenu}
            trigger={["click"]}
            placement="bottomRight"
          >
            <Avatar
              style={{ cursor: "pointer" }}
              icon={<img alt="" src={UserImage} />}
            />
          </Dropdown>
        ) : (
          <div className="peb-navbar-top-auth">
            <div className="peb-navbar-top-auth-not">
              <Link className="left" to="/login">
                MASUK
              </Link>
              <Link className="right" to="/register">
                DAFTAR
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="peb-navbar-bottom peb-bg-orange">
        <ul>
          <li>
            <Link className="peb-navbar-bottom-link" to="/info-wisata">
              Info Wisata
            </Link>
          </li>
          <li>
            <Link className="peb-navbar-bottom-link" to="/umkm">
              UMKM
            </Link>
          </li>
          <li>
            <Link className="peb-navbar-bottom-link" to="/faq">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
