import { Col, Layout, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet-async";
import Forms from "./components/Forms";
import SideBanner from "../Register/components/SideBanner";

import "../Register/components/styles.scss";
import "../../styles/base.scss";

interface Location {
  search: string;
  pathname: string;
}

type Props = {
  location: Location;
};

const InputOTP: React.FC<Props> = ({ location }) => {
  return (
    <>
      <Layout title="Masukan OTP">
        <div className="register-layout">
          <h3 className="peb-logo-mobile"> Logo Web </h3>
          <Row className="register-bac">
            <Col className="register-bac-left p-6" xs={0} sm={0} lg={12}>
              <SideBanner />
            </Col>
            <Col xs={24} sm={24} lg={12}>
              <Forms location={location} />
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default InputOTP;
