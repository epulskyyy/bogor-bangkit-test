import { Button, Select, Table } from "antd";
import Search from "antd/lib/input/Search";
import { ColumnsType } from "antd/lib/table";
import "../../../styles/base.scss";
import Page from "../../../components/Page/Page";
import AddProduct from "./AddProduct";
const { Option } = Select;

export default function Product() {
  
  const columns: ColumnsType<any> = [
    {
      title: "ID Produk",
      width: 100,
      dataIndex: "id_produk",
      key: "id_produk",
      fixed: "left",
    },
    {
      title: "Nama Produk",
      width: 150,
      dataIndex: "nama_produk",
      key: "nama_produk",
      fixed: "left",
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "kategori",
      width: 150,
    },
    {
      title: "Column 2",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Column 3",
      dataIndex: "address",
      key: "3",
      width: 150,
    },
    {
      title: "Column 4",
      dataIndex: "address",
      key: "4",
      width: 150,
    },
    {
      title: "Column 5",
      dataIndex: "address",
      key: "5",
      width: 150,
    },
    {
      title: "Column 6",
      dataIndex: "address",
      key: "6",
      width: 150,
    },
    {
      title: "Column 7",
      dataIndex: "address",
      key: "7",
      width: 150,
    },
    { title: "Column 8", dataIndex: "address", key: "8" },
    {
      title: "#",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <Button type="link">Ubah</Button>,
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      id_produk: `P${i}`,
      nama_produk: 32,
      kategori: `Makanan. ${i}`,
    });
  }
  return (
    <Page title="">
      <>
        <AddProduct/>
        <div className="mb-2">
          <Search
            className="search-header mr-2"
            placeholder="Cari produk"
            style={{ width: 250 }}

            // onSearch={onSearch}
          />
          <label>Urutkan : </label>
          <Select
            size="small"
            defaultValue="asc"
            style={{ width: 100 }}
            className="mr-2"
          >
            <Option value="asc"> A-Z </Option>
            <Option value="desc"> Z-A </Option>
            <Option value="terbaru"> Terbaru </Option>
            <Option value="termurah"> Termurah </Option>
            <Option value="termahal"> Termahal </Option>
          </Select>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1500, y: 300 }}
          />
        </div>
      </>
    </Page>
  );
}
