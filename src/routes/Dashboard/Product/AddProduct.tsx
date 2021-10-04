import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Select, Upload } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useState } from "react";
import { messageValidate } from "../../../utils/constants";
import ImgCrop from "antd-img-crop";
const { Option } = Select;

export default function AddProduct() {
  const [visible, setvisible] = useState(false);
  const [form] = useForm();
  const showDrawer = () => {
    setvisible(true);
  };

  const onClose = () => {
    setvisible(false);
  };
  const [fileList, setFileList] = useState<any>([]);

  const onChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow: any = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <>
      <Button
        type="primary"
        className="mb-2"
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
        Tambah Produk
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" hideRequiredMark form={form}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="nama_produk"
                label="Nama Produk"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Nama Produk"),
                  },
                ]}
              >
                <Input placeholder="Ketik Nama Produk" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="id_kategori"
                label="Kategori"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Kategori"),
                  },
                ]}
              >
                <Select placeholder="Pilih Kategori">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="harga_produk"
                label="Harga Produk"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Harga Produk"),
                  },
                ]}
              >
                <Input placeholder="Ketik Harga Produk" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="url_gambar"
                label="Gambar"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Gambar"),
                  },
                ]}
              >
                <ImgCrop rotate>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                  >
                    {fileList.length < 5 && "+ Unduh"}
                  </Upload>
                </ImgCrop>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.List name="url_ecommerce">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "first"]}
                            fieldKey={[fieldKey, "first"]}
                            rules={[
                              { required: true, message: messageValidate("required", "") },
                            ]}
                          >
                            <Select placeholder="Pilih Kategori">
                              <Option value="xiao">Xiaoxiao Fu</Option>
                            </Select>
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item
                            {...restField}
                            name={[name, "last"]}
                            fieldKey={[fieldKey, "last"]}
                            rules={[
                              { required: true, message: messageValidate("required", "") },
                            ]}
                          >
                            <Input placeholder="Last Name" />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Button
                            type="ghost"
                            onClick={() => remove(name)}
                            block
                            icon={<MinusCircleOutlined />}
                          >
                            Hapus link ecommerce
                          </Button>
                        </Col>
                      </Row>
                    ))}

                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            Tambah link ecommerce
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </>
                )}
              </Form.List>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="deskripsi"
                label="Deskripsi"
                rules={[
                  {
                    required: true,
                    message: messageValidate("required", "Deskripsi"),
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Ketik Deskripsi" />
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
}
