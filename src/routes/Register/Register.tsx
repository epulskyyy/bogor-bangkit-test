import { Col, Row } from "antd";

import "./components/styles.scss";
import "../../styles/base.scss";

import { Layout } from "../../components";
import SideBanner from "./components/SideBanner";
import FormRegister from "./components/FormRegister";

const Register = () => {
  return (
    <Layout title="Register">
      <div className="register-layout">
        <h3 className="peb-logo-mobile"> Ada UMKM </h3>
        <Row className="register-bac">
          <Col className="register-bac-left p-6" xs={0} lg={12} md={0}>
            <SideBanner />
          </Col>
          <Col xs={24} lg={12} md={24} sm={24}>
            <FormRegister />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Register;
