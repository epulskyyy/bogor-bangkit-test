import { Col, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/base.scss";
import "./styles.scss";

const { Text } = Typography;

export default function Footer() {
  return (
    <div className="container mt-3 peb-footer pt-3 pb-3">
      <Row>
        <Col lg={14} xl={14}>
          <Text  strong >Pemulihan Ekonomi Bogor</Text>
          <p className="">web ini adalah ... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam expedita dolorum vero fugiat voluptatum natus earum reiciendis commodi sint ex, quasi laboriosam accusamus sapiente porro accusantium in eius aliquam dicta!</p>
          <div className="mt-3">
            <img alt="logo" className="mt-2 mb-2"/>
            <p>© 2021 • Pemulihan Ekonomi Bogor</p>
          </div>
        </Col>
        <Col lg={8} xl={8}>
          <div className="peb-footer-list">
            <ul className="peb-list mr-3">
              <li className="peb-list-item">
                <Link to="">MASUK</Link>
              </li>
              <li className="peb-list-item">
                <Link to="">RESGITRASI</Link>
              </li>
            </ul>
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
}
