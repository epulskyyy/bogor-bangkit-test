import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../models/RootState";
import { List, Avatar, Button, Skeleton, Empty, Typography } from "antd";
import { Link } from "react-router-dom";
const { Paragraph } = Typography;

export default function DaftarWisataLain() {
  const infoWisata = useSelector((state: RootState) => state.infoWisata);
  return (
    <div>
      <h3>Wisata lainnya</h3>
      {infoWisata.data?.data.length !== 0 ? (
        <List
          className="demo-loadmore-list"
          loading={infoWisata.isLoading}
          itemLayout="horizontal"
          dataSource={infoWisata.data?.data}
          renderItem={(item: any) => (
            <List.Item
              actions={[
                <Link to={"/info-wisata/" + item.id} key="list-loadmore-more">
                  lihat
                </Link>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.url_gambar[0]} />}
                  title={<Link to={"/info-wisata/" + item.id}>{item.nama_wisata}</Link>}
                  description={
                    <Paragraph ellipsis>{item.deskripsi_wisata} </Paragraph>
                  }
                />
              </Skeleton>
            </List.Item>
          )}
        />
      ) : (
        <Empty description={<span>Data tidak ada</span>} />
      )}
    </div>
  );
}
