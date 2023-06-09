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
import * as gtm from "../../../utils/gtm";

const { confirm } = Modal;
const tagManagerArgs = {
  dataLayer: {
    userId: "001",
    userProject: "coba",
    page: "forgot-password",
  },
  dataLayerName: "PageDataLayer",
};

export default function ForgotPassword() {
  gtm.sendDataLayer(tagManagerArgs);
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
        dispatch(
          forgotPasswordRequest(form.getFieldsValue(), () => {
            history.push("/forgot-password/reset");
            form.resetFields();
          })
        );
      },
      onCancel() {},
    });
  };
  return (
    <Layout title="Lupa Kata Sandi">
      <div className="forgot-password peb-container-auth">
        <div className="peb-container-auth-background">
          <div className="peb-card peb-shadow">
            <div className="peb-card-body ">
              <h3>Lupa Kata Sandi</h3>
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
                  <Button
                    className="userInfo"
                    block
                    type="primary"
                    htmlType="submit"
                  >
                    Kirim
                  </Button>
                </Form.Item>
              </Form>
              <div className="peb-text-center">
                <Link to="/forgot-password/reset">Sudah Punya OTP ?</Link>
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
