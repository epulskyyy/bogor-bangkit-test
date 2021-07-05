import "../../styles/base.scss";
import { Button, Form, Input, Typography } from "antd";
import { Link, useHistory } from "react-router-dom";
import { Layout } from "../../components";
import Header from "../../components/Header";
import ContentHome from "./components/ContentHome";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

const { Text } = Typography;

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <Header />
      <Banner />
      <div className="container mt-2 mb-2">
        <ContentHome />
      </div>
      <Footer/>
    </Layout>
  );
};

export default Home;
