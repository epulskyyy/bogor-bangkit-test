import HomeCategory from "./HomeCategory";
import HomeProducts from "./HomeProducts";

const ContentHome = () => {
  return (
    <>
      <HomeProducts title="PRODUK UMKM" titleHits="PRODUCT HITS" titleDiscount="PRODUCT DISCOUNT" />
      <HomeCategory />
    </>
  );
};

export default ContentHome;
