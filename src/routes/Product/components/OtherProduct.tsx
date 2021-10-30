import { Affix, Divider } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducRequest } from "../../../actions/product";
import { RootState } from "../../../models/RootState";

export default function OtherProduct() {
    const { dataId, isLoading } = useSelector(
        (state: RootState) => state.product
      );
  const queryData: any = {
    category_id: "",
    perPage: "10",
    sort:  "",
    name: "",
    umkm_id:  "",
    page:  "1",
  };
  const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getProducRequest(queryData));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
  return (
    <div style={{ marginBottom: "2000px", marginTop: "50px" }}>
      <Affix offsetTop={95}>
        <h3
          style={{ backgroundColor: "white" }}
          //   orientation="left"
          className="peb-text-bold pt-2 pb-2"
        >
          Produk Lain
        </h3>
      </Affix>

    </div>
  );
}
