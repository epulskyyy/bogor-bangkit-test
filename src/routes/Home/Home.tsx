import "../../styles/base.scss";
import ContentHome from "./components/ContentHome";
import Banner from "../../components/Banner/Banner";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import {
  getProductByCountRequest,
  getProductByHitsRequest,
  getProductByDiscountRequest,
} from "../../actions/product";
import { getBannerRequest } from "../../actions/banner";
import Container from "./components/Container";
import { RootState } from "../../models/RootState";

type Props = {
  authedData?: any;
};
const Home: React.FC<Props> = ({ authedData }) => {
  const banner = useSelector((state: RootState) => state.banner);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByCountRequest(8));
    dispatch(getProductByDiscountRequest(8));
    dispatch(getBannerRequest());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const imageFlicking = () => {
    let tempArr = [];
    for (let index = 0; index < banner?.data?.data?.length; index++) {
      for (const key in banner?.data?.data[index].url_gambar) {
        const element = banner?.data?.data[index].url_gambar[key];
        if (element !== "") {
          tempArr.push(element);
        }
      }
    }
    return tempArr;
  };
  return (
    <Container title="Beranda" authedData={authedData}>
      <div>{banner.isLoading ? null : <Banner data={imageFlicking} />}</div>
      <div className="container mt-2 mb-2">
        <ContentHome />
      </div>
    </Container>
  );
};

export default Home;
