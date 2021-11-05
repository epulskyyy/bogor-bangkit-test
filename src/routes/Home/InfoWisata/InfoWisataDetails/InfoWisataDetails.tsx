import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../models/RootState";
import Footer from "../../../../components/footer/Footer";
import Header from "../../../../components/Header";
import { Affix, Result, Spin } from "antd";
import { useParams } from "react-router";
import {
  getInfoWisataByIdRequest,
  getInfoWisataRequest,
} from "../../../../actions/infoWisata";
import BreadCrumb from "./BreadCrumb";
import Content from "./Content";
import { Layout } from "../../../../components";

type Props = {
  authedData?: any;
  data: any;
};

const InfoWisataDetails: React.FC<Props> = ({ authedData }) => {
  const { dataId, isLoading } = useSelector(
    (state: RootState) => state.infoWisata
  );
  const dispatch = useDispatch();
  const { id }: any = useParams();
  useEffect(() => {
    dispatch(getInfoWisataByIdRequest(id));
    dispatch(
      getInfoWisataRequest({ perPage: 10, page: 1, name: "", location: "" })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout title="Info Wisata">
      <Affix offsetTop={0}>
        <Header authedData={authedData} />
      </Affix>
      <div className="container mt-2 mb-2">
        <Spin spinning={isLoading} tip="Memuat...">
          {isLoading ? (
            <> </>
          ) : dataId ? (
            <>
              <BreadCrumb />
              <Content authedData={authedData} />
            </>
          ) : (
            <Result
              status="404"
              title="404"
              subTitle="Maaf, Produk tidak ditemukan."
            />
          )}
        </Spin>
      </div>
      <Footer authedData={authedData} />
    </Layout>
  );
};
export default InfoWisataDetails;
