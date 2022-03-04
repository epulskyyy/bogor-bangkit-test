import React, { useEffect, useState } from "react";
import { Drawer, Form, Button, Col, Row, Input, Modal, Upload } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  EditOutlined,
  ExclamationCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { messageValidate } from "../../../utils/constants";
import { beforeUpload, getBase64, xssValidBool } from "../../../utils/utils";
import { notificationLoadingMessage } from "../../../utils/notifications";
import { getBannerRequest, updateBannerRequest } from "../../../actions/banner";
import { endPoint } from "../../../utils/env";
import ImgCrop from "antd-img-crop";
import axios from "axios";
import { RootState } from "../../../models/RootState";

const { confirm } = Modal;
type Props = {
  obj: any;
  authedDataAdmin?: any;
};
const EditCategory: React.FC<Props> = ({ obj, authedDataAdmin }) => {
  const auth = useSelector((state: RootState) => state.auth);
  console.log("====================================");
  console.log(auth);
  console.log("====================================");
  const [previewImages, setpreviewImages] = useState<any>({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });

  const [imageUploads, setimageUploads] = useState<any>({
    imageOne: "",
    imageTwo: "",
    imageThree: "",
    imageFour: "",
    imageFive: "",
    imageSix: "",
    imageSeven: "",
    imageEight: "",
    imageNine: "",
    imageTen: "",
    imageEleven: "",
    imageTwelve: "",
    imageThirteen: "",
    imageFourteen: "",
    imageFifteen: "",
  });
  const [fileLists, setFileLists] = useState<any>([]);

  const [form] = useForm();
  const { validateFields, getFieldValue } = form;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

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
    if (obj?.url_gambar) {
      const arr = [];
      for (const key in obj?.url_gambar) {
        const element = obj?.url_gambar[key];
        if (element !== "") {
          arr.push(element);
          arrTemp.push({
            ...temp,
            uid: key,
            name: element,
            response: element,
            url: element,
          });
        }
      }
      setimageUploads(arr);
      setFileLists(arrTemp);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [obj?.id]);
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

  const onSubmit = () => {
    validateFields().then(() => {
      const dataForm = {
        nama_iklan: getFieldValue("nama_iklan"),
        url_gambar: imageUploads,
      };
      console.log("====================================");
      console.log(dataForm);
      console.log("====================================");
      confirm({
        title: "Anda yakin?",
        icon: <ExclamationCircleOutlined />,
        okText: "Ya",
        cancelText: "Batal",
        onOk() {
          notificationLoadingMessage("Tunggu sebentar");
          dispatch(
            updateBannerRequest(dataForm, obj.id, () => {
              setVisible(false);
              dispatch(getBannerRequest());
            })
          );
        },
        onCancel() {},
      });
    });
  };
  return (
    <>
      <Button
        onClick={showDrawer}
        icon={
          authedDataAdmin.role === "executive" ? (
            <SearchOutlined />
          ) : (
            <EditOutlined />
          )
        }
      />
      <Drawer
        title={
          (authedDataAdmin.role === "executive"
            ? "Banner Iklan | "
            : "Ubah Banner Iklan | ") + obj.id
        }
        placement="right"
        onClose={onClose}
        visible={visible}
        width="90%"
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onSubmit}
          fields={[
            {
              name: "nama_iklan",
              value: obj?.nama_iklan,
            },
          ]}
        >
          <Row gutter={16}>
            <Col xl={8} lg={8} md={12} sm={12} xs={24}>
              <Form.Item
                name="nama_iklan"
                label="Nama Iklan"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Nama Iklan"),
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
                <Input placeholder="Ketik Nama Iklan" />
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
                <ImgCrop rotate beforeCrop={beforeUpload} aspect={2}>
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
export default EditCategory;
