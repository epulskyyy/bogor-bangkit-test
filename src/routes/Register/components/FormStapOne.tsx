import { useEffect, useState } from "react";

import { Button, Form, Input, Radio } from "antd";

import { formItemLayoutR } from "../../../utils/constants";
import { onlyAlpha, onlyNumeric } from "../../../utils/utils";
import { RootState } from "../../../models/RootState";
import { useDispatch, useSelector } from "react-redux";
import { setFormRegister, setFormStaps } from "../../../actions/register";

export default function FormStapOne() {
  const [form] = Form.useForm();
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const { getFieldsValue } = form;
  const { formData } = useSelector((state: RootState) => state.register);
  const dispatch = useDispatch();

  useEffect(() => {
    let formValidation = false;
    const obj = Object.keys(getFieldsValue());
    for (let i = 0; i < obj.length; i++) {
      const e = obj[i];
      if (e === "nik") {
        if (getFieldsValue()[e] !== undefined) {
          if (getFieldsValue()[e].length !== 16) {
            formValidation = true;
            break;
          }
        }
      } else {
        if (getFieldsValue()[e] !== undefined) {
          if (getFieldsValue()[e].length === 0) {
            formValidation = true;
            break;
          }
        } else {
          formValidation = true;
          break;
        }
      }
    }
    setbuttonDisabled(formValidation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "nama_lengkap") {
      dispatch(setFormRegister(name, onlyAlpha(value)));
      return;
    } else {
      dispatch(setFormRegister(name, value));
    }
  };

  const onNext = () => {
    dispatch(setFormStaps("current", 1));
  };

  return (
    <>
      <Form
        {...formItemLayoutR}
        form={form}
        layout={"vertical"}
        name="register"
        fields={[
          { name: "nik", value: formData?.nik },
          { name: "no_hp", value: formData?.no_hp },
          { name: "nama_lengkap", value: formData?.nama_lengkap },
          { name: "email", value: formData?.email },
          { name: "jenis_kelamin", value: formData?.jenis_kelamin },
        ]}
        initialValues={{
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="nik"
          rules={[
            { required: true, message: "Tolong masukan NIK!" },
            () => ({
              validator(rule, value) {
                if (
                  onlyNumeric(value).length !== 0 &&
                  onlyNumeric(value).length !== 16
                ) {
                  return Promise.reject("NIK harus 16 digit");
                } else {
                  return Promise.resolve();
                }
              },
              message: "NIK harus 16 digit",
            }),
          ]}
          label="NIK"
        >
          <Input
            placeholder="Ketik NIK"
            name="nik"
            type="text"
            onChange={handleChange}
            onKeyPress={(e) => {
              // eslint-disable-next-line no-useless-escape
              if (/[^0-9\/]+/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </Form.Item>
        <Form.Item
          name="no_hp"
          label="Nomor HP"
          rules={[{ required: true, message: "Tolong masukan Nomor HP!" }]}
        >
          <Input
            name="no_hp"
            type="text"
            placeholder="Ketik Nomor HP"
            onChange={handleChange}
            onKeyPress={(e) => {
              // eslint-disable-next-line no-useless-escape
              if (/[^0-9\/]+/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </Form.Item>
        <Form.Item
          name="nama_lengkap"
          label="Nama Lengkap"
          rules={[{ required: true, message: "Tolong masukan Nama Lengkap!" }]}
        >
          <Input
            name="nama_lengkap"
            onChange={handleChange}
            type="nama_lengkap"
            placeholder="Ketik Nama Lengkap"
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "Alamat email tidak valid",
            },
            {
              required: true,
              message: "Mohon masukkan email yang belum terdaftar",
            },
          ]}
        >
          <Input
            name="email"
            onChange={handleChange}
            type="Email"
            placeholder="Ketik Email"
          />
        </Form.Item>
        <Form.Item name="jenis_kelamin" label="Jenis Kelamin">
          <Radio.Group name="jenis_kelamin" onChange={handleChange}>
            <Radio value="laki-laki">Laki-Laki</Radio>
            <Radio value="perempuan">Perempuan</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            block
            disabled={buttonDisabled}
            onClick={onNext}
          >
            Lanjutkan
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
