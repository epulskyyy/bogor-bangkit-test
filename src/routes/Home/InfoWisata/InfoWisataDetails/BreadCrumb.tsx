import { ArrowLeftOutlined } from "@ant-design/icons";
import { Affix, Breadcrumb, Button } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../models/RootState";
import history from "../../../../utils/history";
import { capitalize } from "../../../../utils/utils";

export default function BreadCrumb() {
  const { dataId } = useSelector((state: RootState) => state.infoWisata);
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="mb-2">
      <Affix offsetTop={92}>
        <Breadcrumb style={{ backgroundColor: "white" }}>
          <Breadcrumb.Item>
            <Button
              onClick={goBack}
              size="small"
              type="text"
              icon={<ArrowLeftOutlined />}
            />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/">Beranda</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/info-wisata">{capitalize("info wisata")}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {capitalize(dataId?.data?.nama_wisata || "")}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Affix>
    </div>
  );
}
