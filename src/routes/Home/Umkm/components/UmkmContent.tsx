import { ContactsOutlined } from "@ant-design/icons";
import { Affix, Col, Row } from "antd";
import React, { useState } from "react";
import Container from "../../components/Container";
import UmkmList from "./UmkmList";
import UmkmMaps from "./UmkmMaps";

type Props = {
  authedData: any;
};

const UmkmContent: React.FC<Props> = ({ authedData }) => {
  const [selectedId, setselectedId] = useState();
  return (
    <Container title="Daftar UMKM" authedData={authedData}>
      <div className="container mt-2 mb-2">
        <Affix offsetTop={92}>
          <div className="product-title-tags">
            <h3 style={{ margin: 0 }}>
              <ContactsOutlined /> DAFTAR UMKM
            </h3>
          </div>
        </Affix>
        <Row gutter={16}>
          <Col lg={12}>
            <UmkmMaps selectedId={selectedId} />
          </Col>
          <Col lg={12}>
            <UmkmList selectedId={selectedId} setselectedId={setselectedId}/>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default UmkmContent;
