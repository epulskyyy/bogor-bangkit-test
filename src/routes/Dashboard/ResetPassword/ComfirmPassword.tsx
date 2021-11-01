import { Input, Form, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  changePasswordRequest,
  resetPasswordRequest,
} from "../../../actions/auth";
import { AuthUser } from "../../../models/AuthUser";
import { notificationLoadingMessage } from "../../../utils/notifications";
import { xssValidBool } from "../../../utils/utils";

type Props = {
  authedData?: AuthUser;
};
const Comfirmassword: React.FC<Props> = ({ authedData }) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const onResetpassword = () => {
    const data = {
      email: authedData?.username,
      password: form.getFieldValue("password"),
      password_confirmation: form.getFieldValue("password_confirmation"),
    };
    notificationLoadingMessage("Tunggu sebentar");
    dispatch(changePasswordRequest(data));
  };
  return (
    <Form
      layout="vertical"
      hideRequiredMark
      form={form}
      onFinish={onResetpassword}
    >
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
              return Promise.reject("Kata Sandi harus minimal 6 karakter");
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
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Kirim
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Comfirmassword;
