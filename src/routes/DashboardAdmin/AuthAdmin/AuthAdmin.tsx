import "../../../styles/base.scss";
import "./styless.scss";
import { Button, Card, Col, Form, Input, Row } from "antd";
import { Layout } from "../../../components";
import { useForm } from "antd/lib/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { loginAdminRequest } from "../../../actions/auth";
import { encryptText } from "../../../utils/crypto";
import { RootState } from "../../../models/RootState";
import { useEffect, useState } from "react";
import { generateCaptcha } from "../../../utils/utils";
import { ReloadOutlined } from "@ant-design/icons";

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
const Auth: React.FC = () => {
  const { isLoading } = useSelector((state: RootState) => state.auth);
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

  const [form] = useForm();
  const dispatch = useDispatch();
  const onLogin = () => {
    const dataUser = {
      email: form.getFieldValue("email"),
      password: form.getFieldValue("password"),
    };
    const data = { encrypt: encryptText(JSON.stringify(dataUser)) };
    dispatch(loginAdminRequest(data));
  };
  const validCaptch = () =>
    Number(captchaAdditon.inputResult) !== 0
      ? Number(captchaAdditon.inputResult) !== captchaAdditon.results
      : true;
  return (
    <Layout title="Login" color="#ebf7ff">
      <div className="peb-container-auth" style={{ margin: "auto" }}>
        <Card
          className="mt-5"
          title="LOGIN DASHBOARD ADMIN"
          style={{ maxWidth: 500 }}
        >
          <Form
            initialValues={{
              prefix: "86",
            }}
            layout={"vertical"}
            name="login"
            scrollToFirstError
            {...formItemLayout}
            form={form}
            onFinish={onLogin}
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
                allowClear
                tabIndex={1}
                name="email"
                placeholder="Ketik Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Kata Sandi"
              rules={[{ required: true, message: "Mohon masukkan Kata Sandi" }]}
            >
              <Input.Password
                tabIndex={2}
                allowClear
                name="password"
                type="password"
                placeholder="Ketik Kata Sandi"
              />
            </Form.Item>{" "}
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
                      tabIndex={3}
                      allowClear
                      onChange={(e) =>
                        setCaptchaAdditon((v: any) => ({
                          ...v,
                          inputResult: e.target.value,
                        }))
                      }
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
                loading={isLoading || false}
                disabled={validCaptch()}
                type="primary"
                htmlType="submit"
                block
              >
                MASUK
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </Layout>
  );
};

export default Auth;
