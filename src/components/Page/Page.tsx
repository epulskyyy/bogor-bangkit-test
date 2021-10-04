import { Layout } from "antd";
import { useEffect, useState } from "react";
import SideBar from "../Sidebar/Sidebar";

const { Header, Content, Sider } = Layout;

type Props = {
  title: string;
};

const Page: React.FC<Props> = ({ title, children }) => {
  const [collapsed, setcollapsed] = useState(false);
  const [widthScreen, setwidthScreen] = useState(0);
  const onCollapse = (collapsed: any) => {
    setcollapsed(collapsed);
  };
  useEffect(() => {
    const width = window.innerWidth;
    setwidthScreen(width);
    if (width <= 416) {
      setcollapsed(true);
    }
  }, [widthScreen]);
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <SideBar />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content
            style={{
              display: widthScreen <= 416 && !collapsed ? "none" : "block",
            }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default Page;
