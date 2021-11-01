/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Dropdown, Menu } from "antd";
import React from "react";

import IcWhatsapp from "../../../../assets/peb-whatsapp.svg";
import IcFb from "../../../../assets/peb-fb.svg";
import IcIg from "../../../../assets/peb-ig.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../../models/RootState";
import { MoreOutlined } from "@ant-design/icons";
import UserImage from "../../../../assets/peb-user.svg";

export default function DetailWisata() {
  const { dataId } = useSelector((state: RootState) => state.infoWisata);
  const detailWisata = dataId?.data?.url_socmed;
  const menu = (
    <Menu>
      <Menu.Item icon={<img alt="" src={IcWhatsapp} />}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${dataId?.data?.no_hp}`}
        >
          {dataId?.data?.no_hp}
        </a>
      </Menu.Item>
      <Menu.Item icon={<img alt="" src={IcIg} />}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${detailWisata?.instagram}`}
        >
          Instagram
        </a>
      </Menu.Item>
      <Menu.Item icon={<img alt="" src={IcFb} />}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${detailWisata?.facebook}`}
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
          <img
            src={dataId.data.url_gambar[0] || UserImage}
            alt=""
            height="250px"
          />
        </div>
        <div className="peb-user-name">
          <h4 className="peb-text-bold mt-1">
            {dataId?.data?.nama_wisata?.toUpperCase() || "-"}
          </h4>
        </div>
      </div>
      <div className="peb-whatsapp mb-1">
        <a
          href={`https://wa.me/${dataId?.data?.no_hp}`}
          target="_blank"
          className="peb-link-whatsapp"
        >
          {" "}
          <img alt="" src={IcWhatsapp} /> {dataId?.data?.no_hp}
        </a>
      </div>
      <div className="peb-social">
        {detailWisata?.instagram != null || detailWisata?.instagram !== "" ? (
          <a
            href={`${detailWisata?.instagram}`}
            target="_blank"
            className="peb-link-social mr-1"
          >
            {" "}
            <img alt="" src={IcFb} />
          </a>
        ) : null}
        {detailWisata?.facebook != null || detailWisata?.facebook !== "" ? (
          <a
            href={`${detailWisata?.facebook}`}
            target="_blank"
            className="peb-link-social mr-1"
          >
            {" "}
            <img alt="" src={IcIg} />
          </a>
        ) : null}
      </div>
    </div>
  );
}
