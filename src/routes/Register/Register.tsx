import {Helmet} from "react-helmet-async";
import {Button, Col, Form, Input, Row, Typography,Radio,} from "antd";

import './components/styles.scss'
import '../../styles/base.scss'

import BackImgRegCloud from '../../assets/peb-bac-reg-cloud.svg'
import BackImgReg from '../../assets/peb-bac-reg-child.svg'
import ReCAPTCHA from "react-google-recaptcha";

import { Link } from "react-router-dom";
import { Layout } from "../../components";


const {Text} = Typography;

export const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 24},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 24},
    },
};

const Register = () => {
    const [form] = Form.useForm();

    return (<Layout title="Register">
        <div className="register-layout">
        <h3 className="peb-logo-mobile"> Logo Web </h3>
        <Row className="register-bac">
            <Col className="register-bac-left p-6" xs={0} lg={12} md={0}>
                <div className="register-bac-icon">
                    <img className="register-bac-icon-cloud" height="120px" src={BackImgRegCloud}/>
                    <img className="register-bac-icon-reg" height="352.12px" src={BackImgReg}/>
                </div>
                <h3 className="peb-logo">
                    Logo Web
                </h3>

            </Col>
            <Col xs={24} lg={12} md={24} sm={24} >
                <div className="pl-4 pr-4 pt-6 register-content">
                
                    <h3 className="peb-text-bold pb-2">REGISTER AKUN BARU</h3>
                    <Form
                        {...formItemLayout}
                        form={form}
                        layout={"vertical"}
                        name="login"
                        // onFinish={handleLogin}
                        initialValues={{
                            prefix: "86",
                        }}
                        scrollToFirstError>
                        <Form.Item
                            name="nik"
                            rules={[{required: true, message: 'Tolong input NIK!'}]}
                            label="NIK">
                            <Input placeholder="Ketik NIK"/>
                        </Form.Item>
                        <Form.Item
                            name="nomor_hp"
                            label="Nomor HP"
                            rules={[{required: true, message: 'Tolong input Nomor HP!'}]}>
                            <Input
                                type="nomor_hp"
                                placeholder="Ketik Nomor HP"
                            />
                        </Form.Item>
                        <Form.Item
                            name="nama_lengkap"
                            label="Nama Lengkap"
                            rules={[{required: true, message: 'Tolong input Nama Lengkap!'}]}>
                            <Input
                                type="nama_lengkap"
                                placeholder="Ketik Nama Lengkap"
                            />
                        </Form.Item>
                        <Form.Item
                            name="Email"
                            label="Email"
                            rules={[{required: true, message: 'Tolong input Email!'}]}>
                            <Input
                                type="Email"
                                placeholder="Ketik Email"
                            />
                        </Form.Item>
                        <Form.Item name="radio-group" label="Jenis Kelamin">
                            <Radio.Group>
                                <Radio value="0">Laki-Laki</Radio>
                                <Radio value="1">Perempuan</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            name="alamat_legkap"
                            label="Alamat Lengkap"
                            rules={[{required: true, message: 'Tolong input Alamat Lengkap!'}]}>
                            <Input
                                type="alamat_legkap"
                                placeholder="Ketik Alamat Lengkap"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[{required: true, message: 'Tolong input Password!'}]}>
                            <Input
                                type="password"
                                placeholder="Ketik Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <ReCAPTCHA
                                sitekey="6LeYVMwZAAAAAIOqF-Z1JH7MVXWfWTJ01MRB9Sjw"
                                // onChange={onChange}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" block htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Link to="/login">
                                Kembali ke login
                            </Link>
                        </Form.Item>
                        <Form.Item>
                            <div className="">
                                <Text italic className="peb_t_wf register peb-text-center">website ini di peruntukan untuk marketing
                                    dan branding produk-produk dari
                                    UMKM Kota Bogor
                                </Text>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </Col>
        </Row>
    </div>
    </Layout>
    )
}

export default Register