import React, { useEffect } from "react";
import { List, Avatar, Skeleton, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../models/RootState";
import { getAllUserInfiniteRequest } from "../../../../actions/user";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { capitalize } from "../../../../utils/utils";
import { getDistance } from "../../../../utils/geolocation";
import iconLoc from "../../../../assets/peb-location.svg";
import { examplePosition } from "../../../../utils/constants";

type Props = {
  setselectedId: any;
  selectedId: any;
  setVisible: any;
  visible: any;
  geloc: any;
};

const UmkmList: React.FC<Props> = ({
  setselectedId,
  selectedId,
  setVisible,
  geloc,
}) => {
  const { dataInfinite, isLoadingInfinite } = useSelector(
    (state: RootState) => state.user
  );

  const data = dataInfinite?.data?.data?.map((v: any, i: any) => ({
    ...v,
    title: v.nama_umkm,
    position: [
      v?.data?.latitude ?? examplePosition[i]?.position[0],
      v?.data?.longitude ?? examplePosition[i]?.position[1],
    ],
  }));
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
            dataSource={data}
            renderItem={(item: any) => (
              <List.Item
                key={item.id}
                className={
                  "umkm-list-item " +
                  (Number(item.id) === Number(selectedId) ? "selected" : "")
                }
                onClick={() => setVisible(false)}
                onMouseOver={() => setselectedId(item.id)}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.profil_gambar} />}
                  title={<h5>{item.nama_umkm}</h5>}
                  description={
                    <>
                      {capitalize(item.umkm_detail?.klasifikasi_umkm)}
                      {geloc ? (
                        <span style={{ margin: 0 }}>
                          {" "}
                          |
                          <img src={iconLoc} alt="loc" height="18px" />
                          {getDistance(
                            [geloc.latitude, geloc.longitude],
                            [item?.position[0], item?.position[1]]
                          )}
                        </span>
                      ) : null}
                    </>
                  }
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
