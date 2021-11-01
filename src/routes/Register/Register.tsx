import { Col, Row } from "antd";

import "./components/styles.scss";
import "../../styles/base.scss";

import { Layout } from "../../components";
import SideBanner from "./components/SideBanner";
import FormRegister from "./components/FormRegister";
import Logo from "../../components/Logo/Logo";

const Register = () => {
  return (
    <Layout title="Register">
      <div className="register-layout">
        <div className="peb-logo-mobile">
          <div className="peb-dflex-align-center">
            <Logo size="small" />
            <h4
              className="peb-text-bold ml-1 peb-text-white"
              style={{ margin: "0px" }}
            >
              Bogor Bangkit
            </h4>
          </div>
        </div>
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
