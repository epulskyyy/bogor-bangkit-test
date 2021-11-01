import "../../styles/base.scss";
import "./components/styles.scss";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { Layout } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../models/RootState";
import { loginRequest, setFormAuth } from "../../actions/auth";
import { useEffect, useState } from "react";
import { encryptText } from "../../utils/crypto";
import { ReloadOutlined } from "@ant-design/icons";
import { generateCaptcha } from "../../utils/utils";
import Logo from "../../components/Logo/Logo";

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
  const [captchaAdditon, setCaptchaAdditon] = useState({
    valueOne: 0,
    valueTwo: 0,
    results: 0,
    inputResult: 0,
    operator: "+",
  });

  useEffect(() => {
    refreshCapctha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const refreshCapctha = () => {
    let value: any = generateCaptcha();
    setCaptchaAdditon(value);
  };

  const validCaptch = () =>
    Number(captchaAdditon.inputResult) !== 0
      ? Number(captchaAdditon.inputResult) !== captchaAdditon.results
      : true;
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
          <div className="peb-card auth peb-shadow">
            <div className="peb-card-body">
              <div className="peb-dflex-between peb-mb-2">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Logo size="small" />
                  <div className="peb-dflex-center ml-1">
                    <h4
                      className="peb-text-bold mr-1 peb-text-blue"
                      style={{ margin: "0px" }}
                    >
                      Bogor Bangkit
                    </h4>

                    <h3 className="peb-text-bold" style={{ margin: "0px" }}>
                      Masuk
                    </h3>
                  </div>
                </div>
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
                    tabIndex={1}
                    allowClear
                    onChange={handleOnChange}
                    name="email"
                    placeholder="Ketik Email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Kata Sandi"
                  rules={[
                    { required: true, message: "Mohon masukkan Kata Sandi" },
                  ]}
                >
                  <Input.Password
                    tabIndex={2}
                    allowClear
                    onChange={handleOnChange}
                    name="password"
                    type="password"
                    placeholder="Ketik Kata Sandi"
                  />
                </Form.Item>
                <Form.Item>
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <Input
                        // bordered={false}
                        addonBefore={
                          <Button
                            type="text"
                            onClick={refreshCapctha}
                            icon={<ReloadOutlined />}
                          />
                        }
                        readOnly
                        value={`${captchaAdditon.valueOne} ${captchaAdditon.operator} ${captchaAdditon.valueTwo} =`}
                      />
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <Form.Item
                        name="captchaAdditon"
                        validateStatus={validCaptch() ? "" : "success"}
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: "Tidak boleh kosong",
                          },
                          () => ({
                            validator(role, value) {
                              if (value) {
                                if (validCaptch()) {
                                  return Promise.reject("Hasil salah");
                                }
                              }
                              return Promise.resolve();
                            },
                          }),
                        ]}
                      >
                        <Input
                          onChange={(e) =>
                            setCaptchaAdditon((v: any) => ({
                              ...v,
                              inputResult: e.target.value,
                            }))
                          }
                          tabIndex={3}
                          allowClear
                          type="number"
                          placeholder=""
                          onKeyPress={(e) => {
                            // eslint-disable-next-line no-useless-escape
                            if (/[^0-9\/]+/.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="default"
                    htmlType="submit"
                    disabled={
                      validCaptch() ||
                      formData?.email == null ||
                      formData?.email?.length === 0 ||
                      formData?.password == null ||
                      formData?.password?.length === 0
                    }
                    loading={isLoading || false}
                    block
                    onClick={handleSubmit}
                  >
                    Masuk
                  </Button>
                  <div className="peb-text-center mt-2">
                    <Link to="/forgot-password">Lupa Kata Sandi?</Link>
                  </div>
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
