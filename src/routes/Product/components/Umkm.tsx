/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Dropdown, Menu } from "antd";
import React from "react";

import IcWhatsapp from "../../../assets/peb-whatsapp.svg";
import IcFb from "../../../assets/peb-fb.svg";
import IcIg from "../../../assets/peb-ig.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../models/RootState";
import { MoreOutlined } from "@ant-design/icons";
import UserImage from "../../../assets/peb-user.svg";
import { Link } from "react-router-dom";

export default function Umkm() {
  const { data } = useSelector((state: RootState) => state.user);
  const detailUmkm = data?.data?.umkm_detail;
  const menu = (
    <Menu>
      <Menu.Item icon={<img alt="" src={IcWhatsapp} />}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${data?.data?.no_hp}`}
        >
          {data?.data?.no_hp}
        </a>
      </Menu.Item>
      <Menu.Item icon={<img alt="" src={IcFb} />}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${detailUmkm?.instagram}`}
        >
          Instagram
        </a>
      </Menu.Item>
      <Menu.Item icon={<img alt="" src={IcIg} />}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${detailUmkm?.facebook}`}
        >
          Facebook
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="peb-user">
        <div className="peb-user-avatar">
          <img src={data?.data?.profil_gambar || UserImage} alt="" />
        </div>
        <div className="peb-user-name">
          <h2 className="peb-text-bold ">
            <Link to={"/umkm/" + data?.data?.id}>
              {data?.data?.nama_umkm?.toUpperCase() || "-"}
            </Link>
          </h2>
          <Dropdown
            className="peb-dropdown-umkm ml-2"
            overlay={menu}
            placement="bottomRight"
            arrow
          >
            <Button type="dashed" shape="circle" icon={<MoreOutlined />} />
          </Dropdown>
        </div>
      </div>
      <div className="peb-whatsapp mb-1">
        <a
          href={`https://wa.me/${data?.data?.no_hp}`}
          target="_blank"
          className="peb-link-whatsapp"
        >
          {" "}
          <img alt="" src={IcWhatsapp} /> {data?.data?.no_hp}
        </a>
      </div>
      <div className="peb-social">
        {detailUmkm?.instagram != null || detailUmkm?.instagram !== "" ? (
          <a
            href={`${detailUmkm?.instagram}`}
            target="_blank"
            className="peb-link-social mr-1"
          >
            {" "}
            <img alt="" src={IcIg} />
          </a>
        ) : null}
        {detailUmkm?.facebook != null || detailUmkm?.facebook !== "" ? (
          <a
            href={`${detailUmkm?.facebook}`}
            target="_blank"
            className="peb-link-social mr-1"
          >
            {" "}
            <img alt="" src={IcFb} />
          </a>
        ) : null}
      </div>
    </div>
  );
}
