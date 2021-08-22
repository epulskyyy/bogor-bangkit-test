import React, { useEffect, useState } from "react";

import {
  Form,
  Input,
  Typography,
  Steps,
} from "antd";

import { Link } from "react-router-dom";
import FormStapOne from "./FormStapOne";
import FormStapTwo from "./FormStapTwo";
import { RootState } from "../../../models/RootState";
import { useDispatch, useSelector } from "react-redux";
import { ExclamationCircleOutlined, LoadingOutlined, SafetyOutlined, SolutionOutlined } from "@ant-design/icons";
import Forms from "./FormsOtp";
import { setFormStaps } from "../../../actions/register";

const { Text } = Typography;
const { Step } = Steps;

export default function FormRegister() {
  const { staps, isLoading, isError,formData } = useSelector((state: RootState) => state.register);
  let emailOtp: any = localStorage.getItem("emailOtp");
  const dispatch = useDispatch();

    useEffect(() => {
      if (emailOtp != undefined) {
        dispatch(setFormStaps("current", 2));
        console.log('====================================');
        console.log(emailOtp);
        console.log('====================================');
      }
    }, [formData]);
  
  return (
    <>
      <div className="pl-4 pr-4 pt-6 register-content">
        <h3 className="peb-text-bold mb-2 peb-text-center">REGISTER AKUN BARU</h3>
        <Steps className="mb-3">
          <Step status={staps.current >0 ?"finish":"process"} icon={<SolutionOutlined />}/>
          <Step status={isError ? "error":staps.current > 1 ?"finish": staps.current === 1?"process":"wait"} icon={isError?<ExclamationCircleOutlined />:isLoading?<LoadingOutlined />:<SolutionOutlined />}/>
          <Step status={isError ? "error":staps.current > 1 ?"finish": staps.current === 2?"process":"wait"} title="OTP" icon={isError?<ExclamationCircleOutlined />:isLoading?<LoadingOutlined />:<SafetyOutlined />}/>
        </Steps>
        {staps.current === 0 ? <FormStapOne /> : staps.current === 1? <FormStapTwo />:<Forms/>}

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
