import { HomeOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Form, Button, Breadcrumb } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { useDispatch } from "react-redux";
import Page from "../../../components/Page/Page";
import { AuthUser } from "../../../models/AuthUser";
import ComfirmPassword from "./ComfirmPassword";

type Props = {
  authedData?: AuthUser;
};
const ResetPassword: React.FC<Props> = ({ authedData }) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  return (
    <Page title="">
      <Breadcrumb style={{ marginBottom: "20px" }}>
        <Breadcrumb.Item href="/dashboard">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <LockOutlined />
          <span>Ubah Kata Sandi</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <ComfirmPassword authedData={authedData} />
    </Page>
  );
};
export default ResetPassword;
