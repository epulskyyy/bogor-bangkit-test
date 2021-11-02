import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../models/RootState";
import Footer from "../../../../components/footer/Footer";
import Header from "../../../../components/Header";
import { Affix, Result, Spin, Typography } from "antd";
import { capitalize } from "../../../../utils/utils";
import { useParams } from "react-router";
import {
  getInfoWisataByIdRequest,
  getInfoWisataRequest,
} from "../../../../actions/infoWisata";
import history from "../../../../utils/history";
import BreadCrumb from "./BreadCrumb";
import Content from "./Content";
import { Layout } from "../../../../components";

const { Paragraph } = Typography;
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
  const imageFlicking = () => {
    const images = Object.values(dataId?.data?.url_gambar)?.filter(
      (v) => v !== ""
    );
    return images;
  };
  useEffect(() => {
    dispatch(getInfoWisataByIdRequest(id));
    dispatch(
      getInfoWisataRequest({ perPage: 10, page: 1, name: "", location: "" })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onBack = () => {
    history.push("/info-wisata");
  };
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
