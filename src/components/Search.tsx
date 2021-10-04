import { Input, List, Avatar, Empty } from "antd";
const { Search } = Input;

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
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
];

const SearchComp = () => {
  const onSearch = (value: any) => console.log(value);

  return (
    <div className="peb-navbar-search">
      <Search
        className="search-header"
        placeholder="Cari produk"
        onSearch={onSearch}
      />
      <div className="content-search">
        <div className="peb-search">
          {data != null ? (
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item className="serach-link">
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={item.title}
                  />
                </List.Item>
              )}
            />
          ) : (
            <Empty
              className="p-3"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              imageStyle={{
                height: 60,
              }}
              description={<span>Tidak ada data</span>}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchComp;
