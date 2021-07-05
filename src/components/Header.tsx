import { Dropdown, Input, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

import "../styles/_navbar.scss";

const { Search } = Input;

type Props = {};

const onSearch = (value: any) => console.log(value);

const Header: React.FC<Props> = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
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
            <li>
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Kategori
                </a>
              </Dropdown>
            </li>
          </ul>
        </div>
        <div className="peb-navbar-top-auth">
          <div className="peb-navbar-top-auth-not">
            <Link to="/login">MASUK</Link>
            <Link to="/register">DAFTAR</Link>
          </div>
        </div>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
