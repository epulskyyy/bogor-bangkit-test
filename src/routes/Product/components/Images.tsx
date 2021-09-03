import React from "react";
import { Col, Row, Image } from "antd";

export default function Images() {
  return (
    <Row gutter={[16, 16]}>
      <Col>
        <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      </Col>
      <Col xl={8}>
        <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      </Col>
      <Col xl={8}>
        <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      </Col>
      <Col xl={8}>
        <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      </Col>
    </Row>
  );
}
