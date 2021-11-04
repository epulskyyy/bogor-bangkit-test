import { SwapRightOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { AuthUser } from "../../models/AuthUser";
import "../../styles/base.scss";
import Logo from "../Logo/Logo";
import "./styles.scss";

const { Text } = Typography;
type Props = {
  authedData?: AuthUser;
};
const Footer: React.FC<Props> = ({ authedData }) => {
  return (
    <div className="container mt-3 peb-footer pt-3 pb-3">
      <Row gutter={[16, 16]}>
        <Col
          xs={{ order: 2, span: 24 }}
          sm={{ order: 2, span: 24 }}
          md={{ order: 2, span: 14 }}
          lg={{ order: 1, span: 16 }}
        >
          <h3>
            <Logo size="small" /> Bogor Bangkit
          </h3>
          <p className="">
            Website ini di peruntukan untuk marketing dan branding produk-produk
            dari UMKM Kota Bogor
          </p>
          <div className="mt-3">
            <p>© 2021 • Bogor Bangkit</p>
          </div>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 1, span: 24 }}
          md={{ order: 1, span: 10 }}
          lg={{ order: 2, span: 8 }}
        >
          <div className="peb-footer-list">
            {authedData == null ? (
              <ul className="peb-list mr-3">
                <li className="peb-list-item">
                  <Link to="/login" className="peb-list-link">
                    MASUK
                  </Link>
                </li>
                <li className="peb-list-item">
                  <Link to="/register" className="peb-list-link">
                    REGISTRASI
                  </Link>
                </li>
              </ul>
            ) : null}

            <ul className="peb-list">
              <li className="peb-list-item">
                <Link className="peb-list-link" to="/search">
                  <SwapRightOutlined className="icon-list" /> Produk
                </Link>
              </li>
              <li className="peb-list-item">
                <Link className="peb-list-link" to="/umkm">
                  <SwapRightOutlined className="icon-list" /> UMKM
                </Link>
              </li>
              <li className="peb-list-item">
                <Link className="peb-list-link" to="/info-wisata">
                  <SwapRightOutlined className="icon-list" /> Info Wisata
                </Link>
              </li>
              <li className="peb-list-item">
                <Link className="peb-list-link" to="/faq">
                  <SwapRightOutlined className="icon-list" /> FAQ
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
