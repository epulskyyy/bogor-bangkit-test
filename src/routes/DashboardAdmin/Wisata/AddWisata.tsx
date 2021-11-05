import React, { useState } from "react";
import { Drawer, Form, Button, Col, Row, Input, Modal, Upload } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useDispatch } from "react-redux";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { messageValidate, regexTest } from "../../../utils/constants";
import { beforeUpload, getBase64, xssValidBool } from "../../../utils/utils";
import { notificationLoadingMessage } from "../../../utils/notifications";
import ImgCrop from "antd-img-crop";
import { endPoint } from "../../../utils/env";
import {
  getInfoWisataRequest,
  insertInfoWisataRequest,
} from "../../../actions/infoWisata";
import axios from "axios";
import { Editor } from "react-draft-wysiwyg";

const { confirm } = Modal;
type Props = {};
const AddWisata: React.FC<Props> = () => {
  const [previewImages, setpreviewImages] = useState<any>({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });

  const [imageUploads, setimageUploads] = useState<any>([]);
  const [form] = useForm();
  const { validateFields, getFieldValue, resetFields } = form;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [fileLists, setFileLists] = useState<any>([]);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = ({ file, fileList: newFileList }: any) => {
    if (file.status === "removed") {
      const dtRm: any = { url_gambar: [file.response] };
      let token: any = localStorage.getItem("access_token") || "";
      axios
        .post(endPoint.pemulihanEkonomiUrl.v1 + "delete-gambar", dtRm, {
          headers: {
            contentType: "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((data) => {
          const im = imageUploads.filter((v: any) => v !== file.response);
          setimageUploads(im);
        })
        .catch((error) => {
          const im = imageUploads.filter((v: any) => v !== file.response);
          setimageUploads(im);
        });
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
  const onSubmit = () => {
    validateFields().then(() => {
      const dataForm = {
        nama_wisata: getFieldValue("nama_wisata"),
        lokasi_wisata: getFieldValue("lokasi_wisata"),
        deskripsi_wisata: JSON.stringify(getFieldValue("deskripsi_wisata")),
        url_gambar: imageUploads,
        url_socmed: {
          website: getFieldValue("website"),
          instagram: getFieldValue("instagram"),
          facebook: getFieldValue("facebook"),
          youtube: getFieldValue("youtube"),
        },
        no_hp: getFieldValue("no_hp"),
      };
      confirm({
        title: "Anda yakin?",
        icon: <ExclamationCircleOutlined />,
        okText: "Ya",
        cancelText: "Batal",
        onOk() {
          notificationLoadingMessage("Tunggu sebentar");
          dispatch(
            insertInfoWisataRequest(dataForm, () => {
              setVisible(false);
              resetFields();
              dispatch(
                getInfoWisataRequest({
                  name: "",
                  perPage: "10",
                  location: "",
                  page: "1",
                })
              );
            })
          );
        },
        onCancel() {},
      });
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
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Tambah Wisata
      </Button>
      <Drawer
        title="Tambah Wisata"
        placement="right"
        onClose={onClose}
        visible={visible}
        width="90%"
      >
        <Form layout="vertical" form={form} onFinish={onSubmit}>
          <Row gutter={16}>
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.Item
                name="nama_wisata"
                label="Nama Wisata"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Nama Wisata"),
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
                <Input placeholder="Ketik Nama Wisata" />
              </Form.Item>
            </Col>{" "}
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.Item
                name="lokasi_wisata"
                label="Lokasi"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Lokasi "),
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
                <Input placeholder="Ketik Lokasi" />
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.Item
                name="no_hp"
                label="No Hp"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "No Hp "),
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
                  placeholder="Ketik No Hp"
                  onKeyPress={(e) => {
                    // eslint-disable-next-line no-useless-escape
                    !regexTest.numeric.test(e.key) && e.preventDefault();
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
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
                    {fileLists.length < 15 && "+ Unduh"}
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
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item
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
                name="website"
                label="Website"
              >
                <Input placeholder="Ketik url website" />
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item
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
                name="instagram"
                label="Instagram"
              >
                <Input placeholder="Ketik url instagram" />
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item
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
                name="facebook"
                label="Facebook"
              >
                <Input placeholder="Ketik url facebook" />
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item
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
                name="youtube"
                label="Youtube"
              >
                <Input placeholder="Ketik url youtube" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={20}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Deskripsi Wisata "),
                  },
                  (value) => ({
                    validator(rule, value) {
                      if (
                        value?.blocks.length === 1 &&
                        value?.blocks[0].text === ""
                      ) {
                        return Promise.reject(
                          messageValidate("required", "Deskripsi Wisata ")
                        );
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
                name="deskripsi_wisata"
                label="Deskripsi Wisata"
              >
                <Editor
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  placeholder="Ketik Deskripsi Wisata"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Simpan
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
export default AddWisata;
