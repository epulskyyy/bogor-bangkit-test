import { Affix } from "antd";
import "../../styles/base.scss";
import "../../components/chat/styles.scss";
import "./styles/styles.scss";
import React from "react";
import Header from "../../components/Header";
import { AuthUser } from "../../models/AuthUser";
import ChatCollapse from "../../components/chat/ChatCollapse";
import Footer from "../../components/footer/Footer";
import { Layout } from "../../components";

type Props = {
  authedData?: AuthUser;
};
const Chat: React.FC<Props> = ({ authedData }) => {
  return (
    <Layout title="Detail Product">
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Affix offsetTop={0}>
          <Header authedData={authedData} />
        </Affix>
        <div className="container mt-2 mb-2 chat-content">
          <ChatCollapse />
        </div>
        <Footer authedData={authedData} />
      </div>
    </Layout>
  );
};
export default Chat;
