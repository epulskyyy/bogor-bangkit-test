import { Affix } from "antd";
import React from "react";
import { Layout } from "../../../components";
import Chat from "../../../components/chat/Chat";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/Header";

type Props = {
  title: string;
  authedData?: any;
};

const Container: React.FC<Props> = ({ title, children, authedData }) => {
  const user = authedData;

  return (
    <Layout title={title}>
      <Affix offsetTop={0}>
        <Header authedData={authedData}/>
      </Affix>
      {children}
      <Footer authedData={authedData}/>
      {user ? <Chat /> : null}
    </Layout>
  );
};

export default Container;
