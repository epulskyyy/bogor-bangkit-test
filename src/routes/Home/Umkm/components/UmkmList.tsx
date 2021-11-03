import React, { useEffect } from "react";
import { List, Avatar, Skeleton, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../models/RootState";
import { getAllUserInfiniteRequest } from "../../../../actions/user";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { capitalize } from "../../../../utils/utils";
type Props = {
  setselectedId: any;
  selectedId: any;
};

const UmkmList: React.FC<Props> = ({ setselectedId, selectedId }) => {
  const { dataInfinite, isLoadingInfinite } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useDispatch();
  const loadMoreData = () => {
    if (
      isLoadingInfinite ||
      (dataInfinite != null
        ? dataInfinite?.data?.data?.length >=
          Number(dataInfinite?.data?.total_data)
        : false)
    ) {
      return;
    }
    dispatch(
      getAllUserInfiniteRequest(
        10,
        "active",
        dataInfinite?.data?.current_page + 1 || 1,
        dataInfinite?.data?.data
      )
    );
  };

  useEffect(() => {
    loadMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="scrollableDiv"
      style={{
        height: "600px",
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      {dataInfinite ? (
        <InfiniteScroll
          dataLength={dataInfinite?.data?.data?.length}
          next={loadMoreData}
          hasMore={
            dataInfinite?.data?.data?.length <
            Number(dataInfinite?.data?.total_data)
          }
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>sudah semua, tidak ada lagi 🤐</Divider>}
          scrollableTarget="scrollableDiv"
          className="peb-srollable"
        >
          <List
            className="umkm-list"
            dataSource={dataInfinite?.data?.data}
            renderItem={(item: any) => (
              <List.Item
                key={item.id}
                className={
                  "umkm-list-item " + (item.id == selectedId ? "selected" : "")
                }
                // onMouseOut={() => setselectedId("")}
                onMouseOver={() => setselectedId(item.id)}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.profil_gambar} />}
                  title={<h5>{item.nama_umkm}</h5>}
                  description={capitalize(item.umkm_detail?.klasifikasi_umkm)}
                />
                <Link
                  className="umkm-list-item-link"
                  to={{
                    pathname: "/umkm/" + item.id,
                  }}
                >
                  lihat <ArrowRightOutlined className="umkm-list-item-right" />
                </Link>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      ) : null}
    </div>
  );
};

export default UmkmList;
