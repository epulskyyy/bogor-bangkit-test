import { Avatar, Card, List, Pagination, Select } from "antd";
import Search from "antd/lib/input/Search";
import Container from "../components/Container";

const { Option } = Select;

export default function Umkm() {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  return (
    <Container title="Daftar UMKM">
      <div className="container mt-2 mb-2">
        <Card
          title="Daftar UMKM"
          extra={
            <>
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

              <Select size="small" defaultValue="20" style={{ width: 100 }}>
                <Option value="20"> 20/page </Option>
              </Select>
            </>
          }
        >
          <div className="site-card-wrapper">
            <Search
              className="search-header mb-2"
              placeholder="Cari UMKM"
              // onSearch={onSearch}
              style={{ width: 250 }}
            />
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item className="peb-umkm">
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
            ,
          </div>
          <Pagination
            total={85}
            showSizeChanger={false}
            showTotal={(total) => `Total ${total} UMKM`}
          />
        </Card>
      </div>
    </Container>
  );
}
