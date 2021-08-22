import React, { useEffect, useState } from "react";

import { Button, Col, Form, Input, Row, Select, Typography } from "antd";

import ReCAPTCHA from "react-google-recaptcha";

import {
  formItemLayoutR,
  kecamatanBogor,
  kelurahanBogor,
} from "../../../utils/constants";
import { regristrationRequest, setFormRegister, setFormStaps } from "../../../actions/register";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/RootState";

const { TextArea } = Input;

export default function FormStapTwo() {
  const [form] = Form.useForm();
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [isHuman, setHuman] = useState(false);
  const { getFieldsValue } = form;
  const { formData } = useSelector((state: RootState) => state.register);
  const dispatch = useDispatch();

  useEffect(() => {
    let formValidation = false;
    const obj = Object.keys(getFieldsValue());
    for (let i = 0; i < obj.length; i++) {
      const e = obj[i];
      if (e === "rt" || e === "rw") {
        if (form.getFieldsValue()[e] !== undefined) {
          if (form.getFieldsValue()[e].length !== 3) {
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
  }, [formData]);

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
        kecamatan: kecamatan.value,
        kelurahan: kelurahan.value,
        rt,
        rw,
      },
      no_hp,
      jenis_kelamin,
      password,
      password_confirmation,
    };
    dispatch(regristrationRequest(data))
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
            className="mekar-form-item"
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
            className="mekar-form-item"
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
        label="kelurahan"
        rules={[{ required: true, message: "Tolong masukan Kelurahan!" }]}
      >
        <Select
          placeholder="Ketik Kelurahan Anda"
          options={kelurahanBogor
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
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Tolong masukan Password!" }]}
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
          sitekey="6LeYVMwZAAAAAIOqF-Z1JH7MVXWfWTJ01MRB9Sjw"
          onChange={() => setHuman(true)}
          onErrored={() => setHuman(false)}
          onExpired={() => setHuman(false)}
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
            >
              Register
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
}
