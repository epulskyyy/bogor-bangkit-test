import { SearchOutlined } from "@ant-design/icons";
import { Input, Select, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProductSearchRequest } from "../actions/product";
import { RootState } from "../models/RootState";
import history from "../utils/history";
import { useQuery } from "../utils/utils";

const SearchComp = () => {
  const dispatch = useDispatch();
  const { dataSearch, isLoadingSearch } = useSelector(
    (state: RootState) => state.product
  );
  let query: any = useQuery();

  const queryData: any = {
    category_id: "",
    perPage: "5",
    sort: "",
    name: "",
    umkm_id: "",
    page: "1",
  };
  const debounceFetcher = (name: any) => {
    dispatch(getProductSearchRequest({ ...queryData, name }));
  };
  const searchProduct = (name: any) => {
    history.push({
      search: `category=&per_page=${10}&sort=&product_name=${name.replace(
        " ",
        "-"
      )}&umkm=&page=${1}`,
      pathname: "search",
    });
  };
  const resetSearchData = () => {};
  return (
    <div className="peb-navbar-search">
      <Select
        allowClear={false}
        showSearch
        defaultValue={query.get("product_name")}
        filterOption={false}
        suffixIcon={<SearchOutlined />}
        style={{ display: "block" }}
        placeholder="Cari produk"
        onSearch={debounceFetcher}
        onSelect={searchProduct}
        notFoundContent={isLoadingSearch ? <Spin size="small" /> : null}
        options={dataSearch?.data?.map((value: any, num: number) => ({
          label: value.nama_produk,
          value: value.nama_produk,
          id: value.nama_produk,
        }))}
        onChange={resetSearchData}
      />
    </div>
  );
};

export default SearchComp;
