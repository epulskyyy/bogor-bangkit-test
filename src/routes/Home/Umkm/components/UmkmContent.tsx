import { ContactsOutlined, PicRightOutlined } from "@ant-design/icons";
import { Affix, Button, Col, Drawer, Row } from "antd";
import React, { useState } from "react";
import Container from "../../components/Container";
import UmkmBreadCrumb from "./UmkmBreadCrum";
import UmkmList from "./UmkmList";
import UmkmMaps from "./UmkmMaps";

type Props = {
  authedData: any;
  geloc: any;
};

const UmkmContent: React.FC<Props> = ({ authedData, geloc }) => {
  const [selectedId, setselectedId] = useState();
  const [visible, setVisible] = useState(false);

  return (
    <Container title="Daftar UMKM" authedData={authedData}>
      <div className="container mt-2 mb-2">
        <Affix offsetTop={92}>
        <UmkmBreadCrumb />
          <div className="product-title-tags peb-dflex-between">
            <h3 style={{ margin: 0 }}>
              <ContactsOutlined /> DAFTAR UMKM
            </h3>
            <Col xl={0} lg={0} md={0} sm={6} xs={6}>
              <Button
                onClick={() => setVisible(true)}
                icon={<PicRightOutlined />}
              >
                Lainnya
              </Button>
            </Col>

            <Drawer
              width="100%"
              placement="right"
              onClose={() => setVisible(false)}
              visible={visible}
            >
              <div className="product-title-tags ">
                <h3 style={{ margin: 0 }}>
                  <ContactsOutlined /> DAFTAR UMKM
                </h3>
              </div>
              <UmkmList
                visible={visible}
                setVisible={setVisible}
                selectedId={selectedId}
                setselectedId={setselectedId}
                geloc={geloc}
              />
            </Drawer>
          </div>
        </Affix>
        <Row gutter={16}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <UmkmMaps selectedId={selectedId} geloc={geloc} />
          </Col>
          <Col lg={12} md={12} sm={0} xs={0}>
            <UmkmList
              visible={visible}
              setVisible={setVisible}
              selectedId={selectedId}
              setselectedId={setselectedId}
              geloc={geloc}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default UmkmContent;
