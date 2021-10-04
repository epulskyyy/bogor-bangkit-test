import "../../styles/base.scss";
import ContentHome from "./components/ContentHome";
import Banner from "../../components/Banner/Banner";
import { useDispatch } from "react-redux";
import React from "react";
import { getProductByCountRequest } from "../../actions/product";
import { getBannerRequest } from "../../actions/banner";
import Container from "./components/Container";

type Props = {
  authedData?: any;
};
const Home: React.FC<Props> = ({ authedData }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductByCountRequest(8));
    dispatch(getBannerRequest());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  return (
    <Container title="Beranda" authedData={authedData}>
      <div>
        <Banner data={[{}]} />
      </div>
      <div className="container mt-2 mb-2">
        <ContentHome />
      </div>
    </Container>
  );
};

export default Home;
