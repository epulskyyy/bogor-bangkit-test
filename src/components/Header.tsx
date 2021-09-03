import { Button, Dropdown, Input, Menu, Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  DownOutlined,
  LogoutOutlined,
  MailOutlined,
} from "@ant-design/icons";
import NoImage from "../assets/peb-noimage.svg";
import "../styles/_navbar.scss";
import { verifyJWT } from "../utils/utils";
import { useDispatch } from "react-redux";
import { LogoutRequest } from "../actions/auth";

const { Search } = Input;

type Props = {};

const onSearch = (value: any) => console.log(value);

const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const user = verifyJWT();
  const access_token = localStorage.getItem("access_token");
  const logout = () => {
    const data = {
      token: access_token,
    };
    dispatch(LogoutRequest(data));
  };
  const menu = (
    <Menu>
      {[
        "BAHAN POKOK",
        "MAKANAN & MINUMAN",
        "FASION",
        "PERLENGKAPAN OLAHRAGA",
        "KECANTIKAN",
        "KESEHATAN",
        "KERAJINAN",
        "INTERIOR",
        "LAINNYA",
      ].map((v, i) => (
        <Menu.Item key={v}>
          <Link to="">{v}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  const userMenu = (
    <Menu>
      <Menu.Item>
        <Button icon={<AppstoreOutlined />} type="link">
          Dasbor
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button icon={<LogoutOutlined />} type="link" onClick={logout}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="peb-navbar">
      <div className="peb-navbar-top">
        <div className="peb-navbar-top-logo">PEB</div>
        <div className="peb-navbar-top-wrap">
          <Search
            className="search-header"
            placeholder="Cari produk"
            onSearch={onSearch}
          />
          <ul className="peb-list peb-list-flex ml-2 mr-2">
            <li className="mr-2">
              <Dropdown overlay={menu} placement="bottomRight">
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Kategori
                </a>
              </Dropdown>
            </li>
            {user ? (
              <li>
                <Link to="/mychat">
                <Tooltip placement="bottom" title="Chat">
                  <MailOutlined />{" "}
                  </Tooltip>
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
        {user ? (
          <Dropdown overlay={userMenu} placement="bottomRight">
            <div className="peb-navbar-top-auth-logged">
              <label>Nama UMKM</label>
              <div className="peb-navbar-top-auth-img">
                {/* <img src={NoImage} /> */}
              </div>
            </div>
          </Dropdown>
        ) : (
          <div className="peb-navbar-top-auth">
            <div className="peb-navbar-top-auth-not">
              <Link to="/login">MASUK</Link>
              <Link to="/register">DAFTAR</Link>
            </div>
          </div>
        )}
      </div>
      <div className="peb-navbar-bottom">
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
            <Link className="peb-navbar-bottom-link" to="/about">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link className="peb-navbar-bottom-link" to="/about">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
