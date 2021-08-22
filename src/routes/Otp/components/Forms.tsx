import React, { useState } from "react";
import { Form, Input, Button, Row, Col, notification } from "antd";
import { Link, useHistory } from "react-router-dom";
import OtpInput from "./OtpInput";
import "./OtpInput/index.css";

let wording: any = localStorage.getItem("wording");
wording = JSON.parse(wording);

let emailOtp: any = localStorage.getItem("emailOtp");

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

interface Location {
  search: string;
  pathname: string;
}

type Props = {
  location: Location;
};

const Forms: React.FC<Props> = ({ location }) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [otpCodeMessage, setOtpCodeMessage] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const defaultValue = "";

  const handleInputOtp = (otp: any) => {
    if (otp.length == 4) {
      setOtpCode(otp);
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const subtitle =
    "Masukkan kode khusus yang Kami telah kirimkan ke alamat email Anda di " +
    emailOtp;

  return (
    <div className="container">
      <Form
        {...formItemLayout}
        form={form}
        layout={"vertical"}
        name="forgot-password"
        // onFinish={handleSubmitOtp}
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
            {otpCodeMessage}
          </Col>
        </Row>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            block
            disabled={buttonDisabled}
            loading={buttonLoading}
          >
            Kirim
          </Button>
        </Form.Item>
        <Row style={{ textAlign: "center", fontSize: "12px" }}>
          <Col xs={24}>
            <a
              type="link"
              style={{ textDecoration: "underline" }}
              // onClick={handleResendOtp}
            >
              Kirim ulang kode OTP
            </a>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Forms;
