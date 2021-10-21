import { Affix } from "antd";
import React from "react";
import { useLocation } from "react-router";
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
  let loc = useLocation();
  let locArr = loc.pathname.split("/");
  console.log("====================================");
  console.log(locArr[1]);
  console.log("====================================");
  return (
    <Layout title={title}>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Affix offsetTop={0}>
          <Header authedData={authedData} />
        </Affix>
        {children}
        <Footer authedData={authedData} />
      </div>

      {user && locArr[1] !== "umkm" ? <Chat /> : null}
    </Layout>
  );
};

export default Container;
