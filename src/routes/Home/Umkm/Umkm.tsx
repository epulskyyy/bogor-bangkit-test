import UmkmContent from "./components/UmkmContent";

type Props = {
  authedData?: any;
};
const Umkm: React.FC<Props> = ({ authedData }) => {
  return <UmkmContent authedData={authedData} />;
};
export default Umkm;
