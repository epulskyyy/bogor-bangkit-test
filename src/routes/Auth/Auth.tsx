import "../../styles/base.scss";
import "./components/styles.scss";
import { Button, Form, Input, Typography } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { Layout } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../models/RootState";
import { loginRequest, setFormAuth } from "../../actions/auth";
import { keys } from "../../utils/env";
import { useState } from "react";
import { encryptText } from "../../utils/crypto";

const { Text } = Typography;

export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
export const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
  },
};

const Auth: React.FC = () => {
  const { isLoading, formData } = useSelector((state: RootState) => state.auth);
  const [isHuman, setHuman] = useState(false);
  const dispatch = useDispatch();

  const handleOnChange = (e: any) => {
    dispatch(setFormAuth(e?.target.name, e?.target.value));
  };
  const handleSubmit = () => {
    const data = { encrypt: encryptText(JSON.stringify(formData)) };
    dispatch(loginRequest(data));
  };
  return (
    <Layout title="Login">
      <div className="peb-container-auth">
        <div className="peb-container-auth-background">
          <Link to="/">
            <strong className="peb-login-title">ADA UMKM</strong>
          </Link>
          <br />
          <div className="peb-card peb-shadow">
            <div className="peb-card-body">
              <div className="peb-dflex-between peb-mb-2">
                <h3 className="peb-text-bold">Masuk</h3>
                <Link to="/register">Daftar</Link>
              </div>
              <Form
                {...formItemLayout}
                layout={"vertical"}
                name="login"
                fields={[
                  { name: "email", value: formData?.email },
                  { name: "password", value: formData?.password },
                ]}
                initialValues={{
                  prefix: "86",
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Alamat email tidak valid",
                    },
                    {
                      required: true,
                      message: "Mohon masukkan email yang terdaftar",
                    },
                  ]}
                  label="Email"
                >
                  <Input
                    onChange={handleOnChange}
                    name="email"
                    placeholder="Ketik Email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input.Password
                    onChange={handleOnChange}
                    name="password"
                    type="password"
                    placeholder="Ketik Password"
                  />
                </Form.Item>
                <Form.Item>
                  {keys.recaptcha === "" ? null : (
                    <ReCAPTCHA
                      sitekey={keys.recaptcha}
                      onChange={() => setHuman(true)}
                      onErrored={() => setHuman(false)}
                      onExpired={() => setHuman(false)}
                    />
                  )}
                </Form.Item>

                <Form.Item>
                  <Button
                    type="default"
                    disabled={
                      !isHuman ||
                      formData?.email?.length === 0 ||
                      formData?.password?.length === 0
                    }
                    loading={isLoading || false}
                    block
                    onClick={handleSubmit}
                  >
                    LOGIN
                  </Button>
                </Form.Item>
                <Form.Item>
                  <div className="peb_cont_t_wf">
                    <Text italic className="peb_t_wf">
                      website ini di peruntukan untuk marketing dan branding
                      produk-produk dari UMKM Kota Bogor
                    </Text>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
