import "../../../styles/base.scss";
import "../components/styles.scss";
import { Button, Card, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../../components";
import history from "../../../utils/history";

export default function ForgotPasswordReset() {
  const resetPassword = () => {};
  return (
    <Layout title="Lupa Kata Sandi">
      <div className="peb-container-auth">
        <div className="peb-container-auth-background">
          <div className="peb-card peb-shadow">
            <div className="peb-card-body ">
              <Form>
                <Form.Item>
                  <Input name="email" placeholder="Ketik Email" />
                </Form.Item>
              </Form>
              <Button block type="primary" onClick={resetPassword}>
                Kirim
              </Button>
              <div className="peb-text-center">
                <Link to="/login">Kembali ke login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
