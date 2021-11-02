import "../../../styles/base.scss";
import "../components/styles.scss";
import { Button, Form, Input, Modal } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../../components";
import history from "../../../utils/history";
import { useForm } from "antd/lib/form/Form";
import { useDispatch } from "react-redux";
import { xssValidBool } from "../../../utils/utils";
import { resetPasswordRequest } from "../../../actions/auth";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { notificationLoadingMessage } from "../../../utils/notifications";
const { confirm } = Modal;

export default function ForgotPasswordReset() {
  const [form] = useForm();
  const dispatch = useDispatch();
  const resetPassword = () => {
    confirm({
      title: "Anda yakin?",
      icon: <ExclamationCircleOutlined />,
      okText: "Ya",
      cancelText: "Batal",
      onOk() {
        notificationLoadingMessage("Tunggu sebentar");
        const data = {
          otp: form.getFieldValue("otp"),
          password: form.getFieldValue("password"),
          password_confirmation: form.getFieldValue("password_confirmation"),
        };
        dispatch(
          resetPasswordRequest(data, form.getFieldValue("id"), () => {
            history.push("/login");
            form.resetFields();
          })
        );
      },
      onCancel() {},
    });
  };
  return (
    <Layout title="Lupa Kata Sandi">
      <div className="peb-container-auth">
        <div className="peb-container-auth-background">
          <div className="peb-card peb-shadow">
            <div className="peb-card-body ">
              <h3>Reset Kata Sandi</h3>
              <Form form={form} onFinish={resetPassword}>
                <Form.Item
                  name="id"
                  rules={[
                    {
                      required: true,
                      message: "Mohon masukkan user id yang terdaftar",
                    },
                  ]}
                  label="User ID"
                >
                  <Input
                    name="id"
                    placeholder="Ketik User ID"
                    onKeyPress={(e) => {
                      // eslint-disable-next-line no-useless-escape
                      if (/[^0-9\/]+/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="otp"
                  rules={[
                    {
                      required: true,
                      message: "Mohon masukkan OTP",
                    },
                  ]}
                  label="OTP"
                >
                  <Input
                    name="otp"
                    placeholder="Ketik OTP"
                    onKeyPress={(e) => {
                      // eslint-disable-next-line no-useless-escape
                      if (/[^0-9\/]+/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Tolong masukan Kata Sandi!" },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (getFieldValue("password").length >= 6) {
                          if (!xssValidBool(value)) {
                            return Promise.reject("Masukan tidak valid");
                          }
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "Kata Sandi harus minimal 6 karakter"
                        );
                      },
                    }),
                  ]}
                  label="Kata Sandi Baru"
                >
                  <Input.Password
                    style={{ maxWidth: "350px" }}
                    name="password"
                    placeholder="Ketik Kata Sandi"
                  />
                </Form.Item>
                <Form.Item
                  name="password_confirmation"
                  rules={[
                    { required: true, message: "Tolong masukan Kata Sandi!" },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject("Kata Sandi tidak sama");
                      },
                    }),
                  ]}
                  label="Konfirmasi Kata Sandi"
                >
                  <Input.Password
                    style={{ maxWidth: "350px" }}
                    name="password_confirmation"
                    placeholder="Ketik Ulang Kata Sandi"
                  />
                </Form.Item>
              </Form>
              <Button block type="primary" onClick={resetPassword}>
                Kirim
              </Button>
              <div className="peb-text-center">
                <Link to="/forgot-password">Belum Punya OTP ?</Link>
                <br />
                <Link to="/login">Kembali ke login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
