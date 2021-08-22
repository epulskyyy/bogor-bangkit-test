import React, { useState } from "react";

import {
  Button,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Typography,
  Steps,
} from "antd";

import { Link } from "react-router-dom";
import FormStapOne from "./FormStapOne";
import FormStapTwo from "./FormStapTwo";
import { RootState } from "../../../models/RootState";
import { useSelector } from "react-redux";

const { Text } = Typography;
const { TextArea } = Input;
const { Step } = Steps;

export default function FormRegister() {
  const { staps } = useSelector((state: RootState) => state.register);
  return (
    <>
      <div className="pl-4 pr-4 pt-6 register-content">
        <h3 className="peb-text-bold mb-2 peb-text-center">REGISTER AKUN BARU</h3>
        <Steps {...staps} className="mb-3">
          {[0, 1].map((v) => (
            <Step
              key={v}
            />
          ))}
        </Steps>
        {staps.current === 0 ? <FormStapOne /> : <FormStapTwo />}

        <Link to="/login">Kembali ke login</Link>

        <Form.Item>
          <div className="">
            <Text italic className="peb_t_wf register peb-text-center">
              website ini di peruntukan untuk marketing dan branding
              produk-produk dari UMKM Kota Bogor
            </Text>
          </div>
        </Form.Item>
      </div>
    </>
  );
}
