import { useEffect } from "react";
import "../../styles/base.scss";

import { Layout } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";
import BreadCrumb from "./components/BreadCrumb";
import Content from "./components/Content";
import "./styles/styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducRequest,
  getProduct2Request,
  getProductByIDRequest,
} from "../../actions/product";
import { useParams } from "react-router";
import { AuthUser } from "../../models/AuthUser";
import { getUserByIdRequest } from "../../actions/user";
import { RootState } from "../../models/RootState";
import { Affix, Result, Spin } from "antd";

type Props = {
  authedData?: AuthUser;
};

const Product: React.FC<Props> = ({ authedData }) => {
  const dispatch = useDispatch();
  const { id }: any = useParams();
  const { dataId, isLoadingId } = useSelector(
    (state: RootState) => state.product
  );
  useEffect(() => {
    if (dataId?.data != null) {
      const queryData: any = {
        category_id: "",
        perPage: "20",
        sort: "",
        name: "",
        umkm_id: "",
        page: "1",
      };
      dispatch(getUserByIdRequest(dataId.data?.id_user));
      dispatch(
        getProducRequest({ ...queryData, umkm_id: dataId.data?.id_user })
      );
      dispatch(
        getProduct2Request({
          ...queryData,
          category_id: dataId.data?.id_klasifikasi,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataId]);
  useEffect(() => {
    dispatch(getProductByIDRequest(id));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [id]);

  return (
    <Layout title="Detail Product">
      <Affix offsetTop={0}>
        <Header authedData={authedData} />
      </Affix>
      <div className="container mt-2 mb-2">
        <Spin spinning={isLoadingId} tip="Memuat...">
          {isLoadingId ? (
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
export default Product;
