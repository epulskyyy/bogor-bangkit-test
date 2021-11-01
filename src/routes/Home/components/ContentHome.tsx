import { useSelector } from "react-redux";
import { RootState } from "../../../models/RootState";
import HomeCategory from "./HomeCategory";
import HomeProducts from "./HomeProducts";

const ContentHome = () => {
  const product = useSelector((state: RootState) => state.product);

  return (
    <>
      <HomeProducts title="PRODUK HITS" data={product?.dataHits} />
      <HomeProducts title="PRODUK UMKM" data={product?.dataCount} />
      <HomeProducts title="PRODUK DISKON" data={product?.dataDiscount} />
      <HomeCategory />
    </>
  );
};

export default ContentHome;
