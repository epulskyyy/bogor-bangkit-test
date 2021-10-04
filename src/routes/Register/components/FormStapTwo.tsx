import { useEffect, useState } from "react";

import { Button, Col, Form, Input, Row, Select } from "antd";

import ReCAPTCHA from "react-google-recaptcha";

import {
  formItemLayoutR,
  kecamatanBogor,
  kelurahanBogor,
} from "../../../utils/constants";
import {
  registrationRequest,
  setFormRegister,
  setFormStaps,
} from "../../../actions/register";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/RootState";
import { keys } from "../../../utils/env";
import { xssValid } from "../../../utils/utils";

const { TextArea } = Input;

export default function FormStapTwo() {
  const [form] = Form.useForm();
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [isHuman, setHuman] = useState(false);
  const { getFieldsValue, getFieldValue } = form;
  const { formData, isLoading } = useSelector(
    (state: RootState) => state.register
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (formData?.password != null || formData?.password_confirmation != null) {
      form.validateFields(["password", "password_confirmation"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData?.password, formData?.password_confirmation]);

  useEffect(() => {
    let formValidation = false;
    const obj = Object.keys(getFieldsValue());
    for (let i = 0; i < obj.length; i++) {
      const e = obj[i];
      if (e === "rt" || e === "rw") {
        if (getFieldsValue()[e] !== undefined) {
          if (getFieldsValue()[e].length !== 3) {
            formValidation = true;
            break;
          }
        }
      } else if (e === "password") {
        if (getFieldsValue()[e] !== undefined) {
          if (getFieldsValue()[e].length < 6) {
            formValidation = true;
            break;
          }
        }
      } else if (e === "password_confirmation") {
        if (getFieldsValue()[e] !== undefined) {
          if (getFieldsValue()[e] !== getFieldValue("password")) {
            formValidation = true;
            break;
          }
        }
      } else {
        if (form.getFieldsValue()[e] !== undefined) {
          if (form.getFieldsValue()[e].length === 0) {
            formValidation = true;
            break;
          }
        } else {
          formValidation = true;
          break;
        }
      }
    }
    if (isHuman) {
      setbuttonDisabled(formValidation);
    }
    console.log("====================================");
    console.log(isHuman, "isHuman");
    console.log("====================================");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData, isHuman]);

  const onPrev = () => {
    dispatch(setFormStaps("current", 0));
  };

  const handleChange = (e: any) => {
    dispatch(setFormRegister(e.target.name, e.target.value));
  };

  const onRegist = () => {
    const {
      nama_lengkap,
      nik,
      email,
      alamat_user,
      rt,
      rw,
      no_hp,
      jenis_kelamin,
      password,
      password_confirmation,
      kecamatan,
      kelurahan,
    } = formData;
    const data = {
      nama_lengkap,
      nik,
      email,
      alamat: {
        alamat_user,
        kecamatan: kecamatan?.label,
        kelurahan: kelurahan?.label,
        rt,
        rw,
      },
      no_hp,
      jenis_kelamin,
      password,
      password_confirmation,
      role: "customer",
    };
    dispatch(registrationRequest(data));
  };
  return (
    <Form
      {...formItemLayoutR}
      layout={"vertical"}
      form={form}
      name="register2"
      fields={[
        { name: "rt", value: formData?.rt },
        { name: "rw", value: formData?.rw },
        { name: "kecamatan", value: formData?.kecamatan?.value },
        { name: "kelurahan", value: formData?.kelurahan?.value },
        { name: "alamat_user", value: formData?.alamat_user },
        { name: "password", value: formData?.password },
        {
          name: "password_confirmation",
          value: formData?.password_confirmation,
        },
      ]}
      initialValues={{
        prefix: "86",
      }}
      scrollToFirstError
    >
      <Row gutter={[16, 0]}>
        <Col lg={12} sm={12} xs={12}>
          <Form.Item
            className="peb-form-item"
            label="RT"
            name="rt"
            colon={false}
            rules={[
              {
                required: true,
                message: "RT harus diisi",
              },
              () => ({
                validator(rule, value) {
                  if (!(value.length === 0)) {
                    if (value.length !== 3) {
                      return Promise.reject(
                        "RT harus terdiri dari 3 digit angka"
                      );
                    }
                    if (value === "000") {
                      return Promise.reject("RT tidak boleh 000");
                    }
                    return Promise.resolve();
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
            <Input
              type="number"
              placeholder="000"
              onChange={handleChange}
              onWheel={(e: any) => e.target.blur()}
              onKeyDown={(e) => {
                if (
                  e.key === "Delete" ||
                  e.key === "Backspace" ||
                  e.key === "ArrowRight" ||
                  e.key === "ArrowLeft" ||
                  e.key === "Tab"
                )
                  return;
                !/[0-9]/.test(e.key) && e.preventDefault();
              }}
              name="rt"
            />
          </Form.Item>
        </Col>
        <Col lg={12} sm={12} xs={12}>
          <Form.Item
            className="peb-form-item"
            label="RW"
            name="rw"
            colon={false}
            rules={[
              {
                required: true,
                message: "RW harus diisi",
              },
              () => ({
                validator(rule, value) {
                  if (!(value.length === 0)) {
                    if (value.length !== 3) {
                      return Promise.reject(
                        "RW harus terdiri dari 3 digit angka"
                      );
                    }
                    if (value === "000") {
                      return Promise.reject("RW tidak boleh 000");
                    }
                    return Promise.resolve();
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
            <Input
              type="number"
              placeholder="000"
              onChange={handleChange}
              onWheel={(e: any) => e.target.blur()}
              onKeyDown={(e) => {
                if (
                  e.key === "Delete" ||
                  e.key === "Backspace" ||
                  e.key === "ArrowRight" ||
                  e.key === "ArrowLeft" ||
                  e.key === "Tab"
                )
                  return;
                !/[0-9]/.test(e.key) && e.preventDefault();
              }}
              name="rw"
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="kecamatan"
        label="Kecamatan"
        rules={[{ required: true, message: "Tolong masukan Kecamatan!" }]}
      >
        <Select
          placeholder="Ketik Kecamatan Anda"
          options={kecamatanBogor.map((el: any) => ({
            label: el.nama,
            value: el.id,
            id: el.id,
          }))}
          onSelect={(e, option) => {
            handleChange({ target: { name: "kecamatan", value: option } });
          }}
          showSearch
        />
      </Form.Item>
      <Form.Item
        name="kelurahan"
        label="Kelurahan"
        rules={[{ required: true, message: "Tolong masukan Kelurahan!" }]}
      >
        <Select
          placeholder="Ketik Kelurahan Anda"
          options={kelurahanBogor
            // eslint-disable-next-line eqeqeq
            .filter((v) => v.id_kecamatan == formData?.kecamatan?.id)
            .map((el: any) => ({
              label: el.nama,
              value: el.id,
              id: el.id,
            }))}
          disabled={formData?.kecamatan === undefined}
          onSelect={(e, option) => {
            handleChange({ target: { name: "kelurahan", value: option } });
          }}
          showSearch
        />
      </Form.Item>
      <Form.Item
        name="alamat_user"
        label="Alamat Lengkap"
        rules={[{ required: true, message: "Tolong masukan Alamat Lengkap!" }]}
      >
        <TextArea
          onChange={handleChange}
          autoSize
          placeholder="Ketik alamat Anda"
          name="alamat_user"
          onKeyPress={(e) => {
            // eslint-disable-next-line no-useless-escape
            /[^A-Za-z0-9 ,-\./]/g.test(e.key) && e.preventDefault();
          }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: "Tolong masukan Password!" },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (getFieldValue("password").length >= 6) {
                return Promise.resolve();
              }
              return Promise.reject("Password harus minimal 6 karakter");
            },
          }),
          (value) => ({
            validator() {
              return xssValid(value.getFieldValue("password"));
            },
          }),
        ]}
      >
        <Input.Password
          onChange={handleChange}
          name="password"
          placeholder="Ketik Password"
        />
      </Form.Item>
      <Form.Item
        name="password_confirmation"
        label="Konfirmasi Password"
        rules={[
          { required: true, message: "Tolong masukan Password!" },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Password tidak sama");
            },
          }),
        ]}
      >
        <Input.Password
          onChange={handleChange}
          name="password_confirmation"
          placeholder="Ketik konfirmasi Password"
        />
      </Form.Item>
      <Form.Item>
        <ReCAPTCHA
          sitekey={keys.recaptcha}
          onChange={() => setHuman(true)}
          onErrored={() => {
            setbuttonDisabled(true);
            setHuman(false);
          }}
          onExpired={() => {
            setbuttonDisabled(true);
            setHuman(false);
          }}
        />
      </Form.Item>
      <Form.Item>
        <Row gutter={[16, 0]}>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Button block onClick={onPrev}>
              Sebelumnya
            </Button>
          </Col>
          <Col lg={18} md={18} sm={12} xs={12}>
            <Button
              type="primary"
              block
              disabled={buttonDisabled}
              onClick={onRegist}
              loading={isLoading || false}
            >
              Registrasi
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
}
