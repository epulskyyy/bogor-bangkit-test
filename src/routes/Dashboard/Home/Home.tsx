import { Alert, Card, Col, Result, Row, Statistic, Table, Tag } from "antd";
import Page from "../../../components/Page/Page";
import imgDashboard from "../../../assets/peb-dashboard.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducRequest } from "../../../actions/product";
import { AuthUser } from "../../../models/AuthUser";
import { RootState } from "../../../models/RootState";
import { ColumnsType } from "antd/lib/table";
import { convertDate, formatMoney } from "../../../utils/utils";
import { Link } from "react-router-dom";

type Props = {
  authedData?: AuthUser;
};
const Home: React.FC<Props> = ({ authedData }) => {
  const product = useSelector((state: RootState) => state.product);
  const [queryData, setQueryData] = useState({
    category_id: "",
    perPage: "10",
    sort: "terbaru",
    name: "",
    umkm_id: authedData?.user_id,
    page: "1",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducRequest(queryData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const columns: ColumnsType<any> = [
    {
      title: "ID ",
      dataIndex: "id",
      width: 50,
    },
    {
      title: "Nama Produk",
      dataIndex: "nama_produk",
      width: 300,
      key: "nama_produk",
    },
    {
      title: "Tanggal Buat",
      dataIndex: "created_at",
      width: 200,
      render: (text) => {
        return convertDate(text).full;
      },
    },
    {
      title: "Harga",
      dataIndex: "harga_produk",
      width: 200,
      className: "column-money",
      render: (text) => {
        return formatMoney(text);
      },
    },
    {
      title: "ID Klasifikasi",
      width: 100,
      dataIndex: "id_klasifikasi",
      key: "id_klasifikasi",
    },
    {
      title: "Deskripsi",
      width: 400,
      dataIndex: "deskripsi",
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 100,
      render: (text, row, index) => {
        if (text === "active") {
          return <Tag color="green">Aktif</Tag>;
        } else {
          return <Tag color="red">Tidak Aktif</Tag>;
        }
      },
    },
  ];

  const data = product.data?.data?.map((v: any, i: any) => ({ ...v, key: i }));

  return (
    <Page title="">
      <div>
        <Result
          icon={<img src={imgDashboard} alt="img-dashboard" height="300px" />}
          title="Selamat Datang"
          subTitle="Ini adalah dashboard Bogor Bangkit. Silahkan pilih menu disamping untuk mengubah data anda"
        />
        <Row gutter={[16, 16]}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Card>
              <Statistic
                title="Jumlah Produk"
                value={product.data?.total_data}
              />
            </Card>
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Card>
              <h3>Produk Terbaru</h3>
              <Link to="/dashboard/product">Lihat Produk Lainnya</Link>

              <Table
                columns={columns}
                rowKey={(record) => record.id}
                dataSource={data}
                loading={product.isLoading ?? false}
                pagination={false}
                scroll={{ x: 2000, y: 500 }}
                bordered
              />
              <div></div>
            </Card>
          </Col>
        </Row>
      </div>
    </Page>
  );
};
export default Home;
