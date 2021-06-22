import {Helmet} from "react-helmet-async";
import '../../styles/base.scss'
import BacAuth from '../../assets/peb-bac-auth.svg'
import './components/styles.scss'
import {Button, Form, Input} from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useHistory } from "react-router-dom";

export const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
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
        <>
            <Helmet>
                <title>Mekar.id - Login</title>
            </Helmet>
            <div className="peb-container-auth">
                <div className="peb-container-auth-background">
                    <strong>LOGO WEB</strong>
                    <br/>
                    <div className="peb-card">
                        <div className="peb-card-body">
                            <div className="peb-dflex-between peb-mb-2">
                                <h3>Masuk</h3>
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
                                    <Button type="default" block htmlType="submit" >
                                        LOGIN
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Auth;
