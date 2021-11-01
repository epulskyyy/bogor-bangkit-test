import { Card, Col, Row, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { RootState } from "../../../models/RootState";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { visitCountRequest } from "../../../actions/dashboard";
import { Layout } from "../../../components";
import { Doughnut } from "react-chartjs-2";

export default function Home() {
  const dahsboard = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();
  const hasilHandler = (awal: any, akhir: any) => {
    let hasil: any = ((akhir - awal) / awal) * 100;
    hasil = hasil.toFixed(2);
    if (hasil === "Infinity") {
      return (akhir * 100).toFixed(2);
    }
    return hasil;
  };

  useEffect(() => {
    dispatch(visitCountRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

  const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

  return (
    <Layout title="Dashbor">
      <h3>Jumlah Kunjungan</h3>
      <Row gutter={[16, 16]}>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card>
            <Row gutter={16}>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Statistic
                  title="Bulan Lalu"
                  value={dahsboard.visitCount?.data?.lastMonth || 0}
                />
              </Col>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Statistic
                  title="Bulan Sekarang"
                  value={dahsboard.visitCount?.data?.thisMonth || 0}
                />
              </Col>
            </Row>
            <Statistic
              title="Persentase"
              value={hasilHandler(
                dahsboard.visitCount?.data?.lastMonth || 0,
                dahsboard.visitCount?.data?.thisMonth || 0
              )}
              precision={2}
              valueStyle={{
                color:
                  hasilHandler(
                    dahsboard.visitCount?.data?.lastMonth || 0,
                    dahsboard.visitCount?.data?.thisMonth || 0
                  ) > 0
                    ? "#3f8600"
                    : "#cf1322",
              }}
              prefix={
                hasilHandler(
                  dahsboard.visitCount?.data?.lastMonth || 0,
                  dahsboard.visitCount?.data?.thisMonth || 0
                ) > 0 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
              suffix="%"
            />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card>
            <Row gutter={16}>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Statistic
                  title="Kemarin"
                  value={dahsboard.visitCount?.data?.yesterday || 0}
                />
              </Col>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Statistic
                  title="Hari ini"
                  value={dahsboard.visitCount?.data?.now || 0}
                />
              </Col>
            </Row>
            <Statistic
              title="Persentase"
              value={hasilHandler(
                dahsboard.visitCount?.data?.yesterday || 0,
                dahsboard.visitCount?.data?.now || 0
              )}
              precision={2}
              valueStyle={{
                color:
                  hasilHandler(
                    dahsboard.visitCount?.data?.yesterday || 0,
                    dahsboard.visitCount?.data?.now || 0
                  ) > 0
                    ? "#3f8600"
                    : "#cf1322",
              }}
              prefix={
                hasilHandler(
                  dahsboard.visitCount?.data?.yesterday || 0,
                  dahsboard.visitCount?.data?.now || 0
                ) > 0 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
              suffix="%"
            />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card>
            <Statistic
              title="Jumlah Pengguna"
              value={dahsboard.chart?.jumlah_user}
            />
          </Card>
        </Col>
        <Col lg={12} md={24} sm={24} xs={24}>
          <Card>
            <Doughnut
              data={{
                labels: dahsboard.chart?.produk?.map(
                  ({ nama_klasifikasi }: any) => nama_klasifikasi
                ),
                datasets: [
                  {
                    data: dahsboard.chart?.produk?.map(
                      ({ id_klasifikasi }: any) => id_klasifikasi
                    ),
                    backgroundColor: dahsboard.chart?.produk?.map(() =>
                      randomRGB()
                    ),
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        const v: any = dahsboard.chart?.produk?.find(
                          (x: any) => x?.nama_klasifikasi === context.label
                        );
                        return (
                          "Pengguna : " +
                          v?.jumlah_user +
                          "\n" +
                          "Produk :" +
                          v?.count
                        );
                      },
                      title: function (tooltipItems) {
                        let item = { ...tooltipItems[0] };
                        return item.label;
                      },
                    },
                  },
                },
              }}
            />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
