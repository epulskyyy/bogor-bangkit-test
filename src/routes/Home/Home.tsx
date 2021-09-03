import "../../styles/base.scss";
import { Button, Form, Input, Typography } from "antd";
import { Layout } from "../../components";
import Header from "../../components/Header";
import ContentHome from "./components/ContentHome";
import Banner from "../../components/Banner";
import Footer from "../../components/footer/Footer";
import { useDispatch } from "react-redux";
import React from "react";
import { getCategoriesRequest } from "../../actions/categories";
import Chat from "../../components/chat/Chat";
import { verifyJWT } from "../../utils/utils";
import { getProductByCountRequest } from "../../actions/product";
import { getBannerRequest } from "../../actions/banner";

const { Text } = Typography;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const user = verifyJWT();

  React.useEffect(() => {
    dispatch(getProductByCountRequest(8));
    dispatch(getCategoriesRequest(10));
    dispatch(getBannerRequest());
  }, []);

  return (
    <Layout title="Home">
      <Header />
      <Banner />
      <div className="container mt-2 mb-2">
        <ContentHome />
      </div>
      <Footer />
      {user ? <Chat /> : null}
    </Layout>
  );
};

export default Home;
