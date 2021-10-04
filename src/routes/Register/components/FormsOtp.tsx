import React, { useState } from "react";
import { Form, Button, Row, Col } from "antd";
import OtpInput from "./OtpInput";
import "./OtpInput/index.css";
import { RootState } from "../../../models/RootState";
import { useDispatch, useSelector } from "react-redux";
import {
  registrationOtpRequest,
  registrationResendOtpRequest,
  registrationReset,
} from "../../../actions/register";
import { notificationLoadingMessage } from "../../../utils/notifications";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
  },
};
type Props = {
  //   location: Location;
};

const FormsOtp: React.FC<Props> = () => {
  let emailOtp: any = localStorage.getItem("emailOtp");

  const [form] = Form.useForm();
  const { isErrorOtp, isLoadingOtp, messange } = useSelector(
    (state: RootState) => state.register
  );
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [otpCode, setOtpCode] = useState("");
  const dispatch = useDispatch();
  const defaultValue = "";

  const handleInputOtp = (otp: any) => {
    if (otp.length === 4) {
      setOtpCode(otp);
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleSubmitOtp = () => {
    const data = {
      email: emailOtp,
      otp: otpCode,
    };
    console.log("====================================");
    console.log();
    console.log("====================================");
    dispatch(registrationOtpRequest(data));
  };

  const handleResendOtp = () => {
    const data = {
      email: emailOtp,
    };
    notificationLoadingMessage("Tunggu..", "sedang mengirim ulang otp");
    dispatch(registrationResendOtpRequest(data));
  };
  const handleRegistrationReset = () => {
    localStorage.removeItem("emailOtp");
    dispatch(registrationReset());
  };
  const subtitle =
    "Masukkan kode khusus yang kami telah kirimkan ke alamat email Anda di " +
    emailOtp;

  return (
    <div className="mb-3">
      <h3>Kode OTP</h3>
      <p>{subtitle}</p>

      <Form
        {...formItemLayout}
        form={form}
        layout={"vertical"}
        name="forgot-password"
        onFinish={handleSubmitOtp}
        scrollToFirstError
      >
        <OtpInput
          defaultValue={defaultValue}
          handleButtonDisabled={setButtonDisabled}
          autoFocus
          isNumberInput
          length={4}
          className="otpContainer"
          inputClassName="otpInput"
          onChangeOTP={handleInputOtp}
        />
        <Row style={{ height: "40px" }}>
          <Col
            xs={24}
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "#EC1555",
              padding: "10px",
            }}
          >
            {isErrorOtp ?? messange}
          </Col>
        </Row>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            block
            disabled={buttonDisabled}
            loading={isLoadingOtp || false}
          >
            Verifikasi
          </Button>
        </Form.Item>
        <Row style={{ textAlign: "center", fontSize: "12px" }}>
          <Col xs={24}>
            <Button
              type="link"
              style={{ textDecoration: "underline" }}
              onClick={handleResendOtp}
            >
              Kirim ulang kode OTP
            </Button>
          </Col>
          <Col xs={24}>
            <Button
              type="link"
              style={{ textDecoration: "underline" }}
              onClick={handleRegistrationReset}
            >
              Daftar Ulang
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormsOtp;
