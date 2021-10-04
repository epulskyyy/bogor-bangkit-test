import { Col, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { AuthUser } from "../../models/AuthUser";
import "../../styles/base.scss";
import "./styles.scss";

const { Text } = Typography;
type Props = {
  authedData?: AuthUser;
};
const Footer: React.FC<Props> = ({ authedData }) => {
  return (
    <div className="container mt-3 peb-footer pt-3 pb-3">
      <Row>
        <Col lg={14} xl={14}>
          <Text strong>Pemulihan Ekonomi Bogor</Text>
          <p className="">
            website ini di peruntukan untuk marketing dan branding produk-produk
            dari UMKM Kota Bogor
          </p>
          <div className="mt-3">
            <p>© 2021 • Pemulihan Ekonomi Bogor</p>
          </div>
        </Col>
        <Col lg={8} xl={8}>
          <div className="peb-footer-list">
            {authedData == null ? (
              <ul className="peb-list mr-3">
                <li className="peb-list-item">
                  <Link to="">MASUK</Link>
                </li>
                <li className="peb-list-item">
                  <Link to="">RESGITRASI</Link>
                </li>
              </ul>
            ) : null}

            <ul className="peb-list">
              <li className="peb-list-item">
                <Link to="">Produk</Link>
              </li>
              <li className="peb-list-item">
                <Link to="">UMKM</Link>
              </li>
              <li className="peb-list-item">
                <Link to="">Info Wisata</Link>
              </li>
              <li className="peb-list-item">
                <Link to="">Tentang Kami</Link>
              </li>
              <li className="peb-list-item">
                <Link to="">FAQ</Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
