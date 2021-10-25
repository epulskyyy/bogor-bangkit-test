import "../../../styles/base.scss";
import "../components/styles.scss";
import { Button, Form, Input, Modal } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../../components";
import history from "../../../utils/history";
import { useForm } from "antd/lib/form/Form";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { notificationLoadingMessage } from "../../../utils/notifications";
import { useDispatch } from "react-redux";
import { forgotPasswordRequest } from "../../../actions/auth";
const { confirm } = Modal;

export default function ForgotPassword() {
  const [form] = useForm();
  const dispatch = useDispatch();

  const sendEmailForgotPassword = () => {
    confirm({
      title: "Anda yakin?",
      icon: <ExclamationCircleOutlined />,
      okText: "Ya",
      cancelText: "Batal",
      onOk() {
        notificationLoadingMessage("Tunggu sebentar");
        const dataForm = {
          email: "harfik95@gmail.com",
        };
        dispatch(
          forgotPasswordRequest(dataForm, () => {
            history.push("/forgot-password/reset");
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
              <Form form={form} onFinish={sendEmailForgotPassword}>
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
                  <Input name="email" placeholder="Ketik Email" />
                </Form.Item>
                <Form.Item>
                  <Button block type="primary" htmlType="submit">
                    Kirim
                  </Button>
                </Form.Item>
              </Form>
              <div className="peb-text-center">
                <Link to="/login">Kembali ke login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
