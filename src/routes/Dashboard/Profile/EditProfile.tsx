import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  Modal,
  Radio,
  Upload,
} from "antd";
import {
  EditFilled,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { messageValidate, regexTest } from "../../../utils/constants";
import { useForm } from "antd/lib/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/RootState";
import { beforeUpload, getBase64, xssValidBool } from "../../../utils/utils";
import { AuthUser } from "../../../models/AuthUser";
import { editProfileRequest, getUserByIdRequest } from "../../../actions/user";
import { notificationLoadingMessage } from "../../../utils/notifications";
import { endPoint } from "../../../utils/env";
import ImgCrop from "antd-img-crop";

const { Option } = Select;
const { confirm } = Modal;
type Props = {
  authedData: AuthUser;
};
const EditProfile: React.FC<Props> = ({ authedData }) => {
  const [form] = useForm();
  const { validateFields, getFieldValue } = form;
  const categories = useSelector((state: RootState) => state.categories);
  const { data } = useSelector((state: RootState) => state.user);
  const alamatUser = data?.data?.alamat;
  const detailUmkm = data?.data?.umkm_detail;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [previewImages, setpreviewImages] = useState<any>({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });

  const [imageUploads, setimageUploads] = useState<any>([]);
  const [fileLists, setFileLists] = useState<any>([]);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const temp = {
      uid: "1",
      name: "xxx.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "http://www.baidu.com/xxx.png",
    };
    let arrTemp = [];
    let arr = [];

    if (data?.data?.profil_gambar) {
      arrTemp.push({
        ...temp,
        uid: 1,
        name: data?.data?.profil_gambar,
        response: data?.data?.profil_gambar,
        url: data?.data?.profil_gambar,
      });
      arr.push(data?.data?.profil_gambar);
      setimageUploads(arr);
      setFileLists(arrTemp);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data?.id]);
  const onSubmit = () => {
    validateFields().then(() => {
      const dataForm = {
        nama_lengkap: getFieldValue("nama_lengkap"),
        nik: getFieldValue("nik"),
        email: getFieldValue("email"),
        alamat: {
          alamat_user: getFieldValue("alamat_user"),
          kecamatan: getFieldValue("kecamatan"),
          kelurahan: getFieldValue("kelurahan"),
          rt: getFieldValue("rt"),
          rw: getFieldValue("rw"),
        },
        no_hp: getFieldValue("no_hp"),
        jenis_kelamin: getFieldValue("jenis_kelamin"),
        nama_umkm: getFieldValue("nama_umkm"),
        logo_umkm: "",
        umkm_detail: {
          alamat_umkm: getFieldValue("alamat_umkm"),
          klasifikasi_umkm: getFieldValue("klasifikasi_umkm"),
          shopee_url: getFieldValue("shopee_url"),
          tokped_url: getFieldValue("tokped_url"),
          bukalapak_url: getFieldValue("bukalapak_url"),
          lazada_url: getFieldValue("lazada_url"),
          instagram: getFieldValue("instagram"),
          facebook: getFieldValue("facebook"),
          no_regis_umkm: "",
        },
        legalitas: getFieldValue("legalitas"),
        profil_gambar: imageUploads[0],
      };
      confirm({
        title: "Anda yakin?",
        icon: <ExclamationCircleOutlined />,
        okText: "Ya",
        cancelText: "Batal",
        onOk() {
          notificationLoadingMessage("Tunggu sebentar");
          dispatch(
            editProfileRequest(authedData.user_id, dataForm, () => {
              setVisible(false);

              dispatch(getUserByIdRequest(authedData?.user_id));
            })
          );
        },
        onCancel() {},
      });
    });
  };

  const onChange = ({ file, fileList: newFileList }: any) => {
    if (file.status === "removed") {
      const im = imageUploads.filter((v: any) => v !== file.response);
      setimageUploads(im);
    }
    if (file.status != null) {
      setFileLists(newFileList);
    }
  };
  const uploadMedia = (componentsData: any) => {
    let formData = new FormData();
    formData.append("imageOne", componentsData.file);
    fetch(endPoint.uploadFile.v1 + "uploadFile", {
      method: "POST",
      headers: {
        contentType: "multipart/form-data",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setimageUploads((v: any) => [...v, data.Response_Data[0]]);
        componentsData.onSuccess(data.Response_Data[0]);
      })
      .catch((error) => {
        console.log("Error fetching profile " + error);
        componentsData.onError("Error uploading image");
      });
  };

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setpreviewImages({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  const handleCancel = () => setpreviewImages({ previewVisible: false });

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<EditFilled />}>
        Ubah Data
      </Button>
      <Drawer
        title="Ubah data profil"
        placement="right"
        onClose={onClose}
        visible={visible}
        width="90%"
      >
        <Form
          layout="vertical"
          form={form}
          fields={[
            { name: "nik", value: data?.data?.nik },
            { name: "email", value: data?.data?.email },
            { name: "nama_lengkap", value: data?.data?.nama_lengkap },
            { name: "jenis_kelamin", value: data?.data?.jenis_kelamin },
            { name: "no_hp", value: data?.data?.no_hp },
            { name: "nama_umkm", value: data?.data?.nama_umkm },
            { name: "legalitas", value: data?.data?.legalitas },
            { name: "alamat_user", value: alamatUser?.alamat_user },
            { name: "rt", value: alamatUser?.rt },
            { name: "rw", value: alamatUser?.rw },
            { name: "kelurahan", value: alamatUser?.kelurahan },
            { name: "kecamatan", value: alamatUser?.kecamatan },
            { name: "alamat_umkm", value: detailUmkm?.alamat_umkm },
            { name: "klasifikasi_umkm", value: detailUmkm?.klasifikasi_umkm },
            { name: "shopee_url", value: detailUmkm?.shopee_url },
            { name: "tokped_url", value: detailUmkm?.tokped_url },
            { name: "bukalapak_url", value: detailUmkm?.bukalapak_url },
            { name: "lazada_url", value: detailUmkm?.lazada_url },
            { name: "instagram", value: detailUmkm?.instagram },
            { name: "facebook", value: detailUmkm?.facebook },
          ]}
        >
          <Row gutter={16}>
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.Item
                name="nik"
                label="NIK"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "NIK"),
                  },
                ]}
              >
                <Input readOnly />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Email"),
                  },
                ]}
              >
                <Input readOnly />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.Item
                name="nama_lengkap"
                label="Nama Pelaku Usaha"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Nama Pelaku Usaha"),
                  },
                ]}
              >
                <Input
                  onKeyPress={(e) => {
                    // eslint-disable-next-line no-useless-escape
                    /[^A-Za-z ]/g.test(e.key) && e.preventDefault();
                  }}
                />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.Item
                name="no_hp"
                label="No HP"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "No HP"),
                  },
                ]}
              >
                <Input
                  type="number"
                  onKeyPress={(e) => {
                    // eslint-disable-next-line no-useless-escape
                    !regexTest.numeric.test(e.key) && e.preventDefault();
                  }}
                />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.Item
                name="jenis_kelamin"
                label="Jenis Kelamin"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Jenis Kelamin"),
                  },
                ]}
              >
                <Radio.Group name="jenis_kelamin">
                  <Radio value="laki-laki">Laki-Laki</Radio>
                  <Radio value="perempuan">Perempuan</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.Item
                name="nama_umkm"
                label="Nama Usaha"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Nama Usaha "),
                  },
                  (value) => ({
                    validator(rule, value) {
                      if (value != null) {
                        if (!xssValidBool(value)) {
                          return Promise.reject("Masukan tidak valid");
                        }
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input
                  onKeyPress={(e) => {
                    // eslint-disable-next-line no-useless-escape
                    /[^A-Za-z ]/g.test(e.key) && e.preventDefault();
                  }}
                />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.List
                name="legalitas"
                rules={[
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 0) {
                        return Promise.reject(
                          new Error("Minimal satu legalitas")
                        );
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        label={index === 0 ? "Legalitas" : ""}
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              message: messageValidate(
                                "required",
                                "Legalitas "
                              ),
                            },
                            (value) => ({
                              validator(rule, value) {
                                if (value != null) {
                                  if (!xssValidBool(value)) {
                                    return Promise.reject(
                                      "Masukan tidak valid"
                                    );
                                  }
                                }
                                return Promise.resolve();
                              },
                            }),
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="Ketik Legalitas"
                            style={{ width: "60%" }}
                          />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: "60%" }}
                        icon={<PlusOutlined />}
                      >
                        Tambah Legalitas
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Col>
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.Item
                name="url_gambar"
                label="Gambar"
                rules={[
                  (value) => ({
                    validator(rule, value) {
                      if (fileLists.length === 0) {
                        return Promise.reject("Gambar harus di isi");
                      } else {
                        for (let index = 0; index < fileLists.length; index++) {
                          const element = fileLists[index];
                          if (element.status === "error") {
                            return Promise.reject(
                              "Terdapat gambar tidak valid"
                            );
                          }
                        }
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <ImgCrop rotate beforeCrop={beforeUpload}>
                  <Upload
                    beforeUpload={beforeUpload}
                    customRequest={uploadMedia}
                    listType="picture-card"
                    fileList={fileLists}
                    onChange={onChange}
                    onPreview={handlePreview}
                  >
                    {fileLists.length < 1 && "+ Unduh"}
                  </Upload>
                </ImgCrop>
                <Modal
                  visible={previewImages.previewVisible}
                  title={previewImages.previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImages.previewImage}
                  />
                </Modal>
              </Form.Item>
            </Col>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <Form.Item name="alamat" label="Info Alamat">
                <Row gutter={16}>
                  <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                      name="alamat_user"
                      label="Alamat"
                      rules={[
                        {
                          required: true,
                          message: messageValidate("required", "Alamat "),
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <Form.Item
                      name="rt"
                      label="RT"
                      rules={[
                        {
                          required: true,
                          message: messageValidate("required", "RT "),
                        },
                        {
                          max: 3,
                          min: 3,
                          message: messageValidate("minmax", "RT ", 3),
                        },
                      ]}
                    >
                      <Input
                        type="number"
                        placeholder="000"
                        onKeyPress={(e) => {
                          // eslint-disable-next-line no-useless-escape
                          !regexTest.numeric.test(e.key) && e.preventDefault();
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <Form.Item
                      name="rw"
                      label="RW"
                      rules={[
                        {
                          required: true,
                          message: messageValidate("required", "RW "),
                        },
                        {
                          max: 3,
                          min: 3,
                          message: messageValidate("minmax", "RW ", 3),
                        },
                      ]}
                    >
                      <Input
                        type="number"
                        placeholder="000"
                        onKeyPress={(e) => {
                          // eslint-disable-next-line no-useless-escape
                          !regexTest.numeric.test(e.key) && e.preventDefault();
                        }}
                      />
                    </Form.Item>
                  </Col>

                  <Col xl={6} lg={6} md={12} sm={12} xs={24}>
                    <Form.Item
                      name="kecamatan"
                      label="Kecamatan"
                      rules={[
                        {
                          required: true,
                          message: messageValidate("required", "Kecamatan "),
                        },
                      ]}
                    >
                      <Input
                        onKeyPress={(e) => {
                          // eslint-disable-next-line no-useless-escape
                          /[^A-Za-z ]/g.test(e.key) && e.preventDefault();
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xl={6} lg={6} md={12} sm={12} xs={24}>
                    <Form.Item
                      name="kelurahan"
                      label="Kelurahan"
                      rules={[
                        {
                          required: true,
                          message: messageValidate("required", "Kelurahan "),
                        },
                      ]}
                    >
                      <Input
                        onKeyPress={(e) => {
                          // eslint-disable-next-line no-useless-escape
                          /[^A-Za-z ]/g.test(e.key) && e.preventDefault();
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <Form.Item name="umkm_detail" label="Info UMKM">
                <Row gutter={16}>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <Form.Item
                      name="alamat_umkm"
                      label="Alamat UMKM"
                      rules={[
                        {
                          required: true,
                          message: messageValidate("required", "Alamat UMKM "),
                        },
                        (value) => ({
                          validator(rule, value) {
                            if (value != null) {
                              if (!xssValidBool(value)) {
                                return Promise.reject("Masukan tidak valid");
                              }
                            }
                            return Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <Input
                        onKeyPress={(e) => {
                          // eslint-disable-next-line no-useless-escape
                          /[^A-Za-z0-9 ,-\./]/g.test(e.key) &&
                            e.preventDefault();
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <Form.Item
                      name="klasifikasi_umkm"
                      label="Klasifikasi UMKM"
                      rules={[
                        {
                          required: true,
                          message: messageValidate(
                            "required",
                            "Klasifikasi UMKM "
                          ),
                        },
                      ]}
                    >
                      <Select showSearch>
                        {categories?.data?.data?.data?.map((v: any, i: any) => (
                          <Option key={i} value={v.nama_klasifikasi}>
                            {v.nama_klasifikasi}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <Form.Item
                      name="shopee_url"
                      label="Shopee URL"
                      rules={[
                        (value) => ({
                          validator(rule, value) {
                            if (value != null) {
                              if (!xssValidBool(value)) {
                                return Promise.reject("Masukan tidak valid");
                              }
                            }
                            return Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <Form.Item
                      name="tokped_url"
                      label="Tokopedia URL"
                      rules={[
                        (value) => ({
                          validator(rule, value) {
                            if (value != null) {
                              if (!xssValidBool(value)) {
                                return Promise.reject("Masukan tidak valid");
                              }
                            }
                            return Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <Form.Item
                      name="bukalapak_url"
                      label="Bukalapak URL"
                      rules={[
                        (value) => ({
                          validator(rule, value) {
                            if (value != null) {
                              if (!xssValidBool(value)) {
                                return Promise.reject("Masukan tidak valid");
                              }
                            }
                            return Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <Form.Item
                      name="lazada_url"
                      label="Lazada URL"
                      rules={[
                        (value) => ({
                          validator(rule, value) {
                            if (value != null) {
                              if (!xssValidBool(value)) {
                                return Promise.reject("Masukan tidak valid");
                              }
                            }
                            return Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <Form.Item
                      name="instagram"
                      label="Instagram URL"
                      rules={[
                        (value) => ({
                          validator(rule, value) {
                            if (value != null) {
                              if (!xssValidBool(value)) {
                                return Promise.reject("Masukan tidak valid");
                              }
                            }
                            return Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <Form.Item
                      name="facebook"
                      label="Facebook URL"
                      rules={[
                        (value) => ({
                          validator(rule, value) {
                            if (value != null) {
                              if (!xssValidBool(value)) {
                                return Promise.reject("Masukan tidak valid");
                              }
                            }
                            return Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" onClick={onSubmit}>
              Simpan
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
export default EditProfile;
