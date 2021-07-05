import {Helmet} from "react-helmet-async";
import '../../styles/base.scss'
import './components/styles.scss'
import {Button, Form, Input, Typography} from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import {Link, useHistory} from "react-router-dom";
import {Layout} from "../../components";

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
export const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
    },
};


const Auth: React.FC = () => {
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Layout title="Login">
            <div className="peb-container-auth">
                <div className="peb-container-auth-background">
                    <strong className="pep-login-title">LOGO WEB</strong>
                    <br/>
                    <div className="peb-card peb-shadow">
                        <div className="peb-card-body">
                            <div className="peb-dflex-between peb-mb-2">
                                <h3 className="peb-text-bold">Masuk</h3>
                                <Link to="/register">Daftar</Link>
                            </div>
                            <Form
                                {...formItemLayout}
                                form={form}
                                layout={"vertical"}
                                name="login"
                                // onFinish={handleLogin}
                                initialValues={{
                                    prefix: "86",
                                }}
                                scrollToFirstError
                            >
                                <Form.Item
                                    name="email"
                                    rules={[{required: true, message: 'Please input your Username!'}]}
                                    label="Email"
                                >
                                    <Input placeholder="Ketik Email"/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password"

                                    rules={[{required: true, message: 'Please input your Password!'}]}
                                >
                                    {/*<a className="login-form-forgot" href="">*/}
                                    {/*    Forgot password*/}
                                    {/*</a>*/}
                                    <Input
                                        // prefix={<LockOutlined className="site-form-item-icon"/>}
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
                                    <Button type="default" block htmlType="submit">
                                        LOGIN
                                    </Button>
                                </Form.Item>
                                <Form.Item>
                                    <div className="peb_cont_t_wf">
                                    <Text italic className="peb_t_wf">website ini di peruntukan untuk marketing
                                        dan branding produk-produk dari
                                        UMKM Kota Bogor
                                    </Text>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Auth;
