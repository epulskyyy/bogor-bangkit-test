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
      <Row gutter={[16, 16]}>
        <Col lg={14} xl={14}>
          <Text strong>Bogor Bangkit</Text>
          <p className="">
            Website ini di peruntukan untuk marketing dan branding produk-produk
            dari UMKM Kota Bogor
          </p>
          <div className="mt-3">
            <p>© 2021 • Bogor Bangkit</p>
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
                  <Link to="">REGISTRASI</Link>
                </li>
              </ul>
            ) : null}

            <ul className="peb-list">
              <li className="peb-list-item">
                <Link to="/search">Produk</Link>
              </li>
              <li className="peb-list-item">
                <Link to="/umkm">UMKM</Link>
              </li>
              <li className="peb-list-item">
                <Link to="/info-wisata">Info Wisata</Link>
              </li>
              <li className="peb-list-item">
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
