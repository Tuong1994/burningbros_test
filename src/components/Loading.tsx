import React from "react";
import { Row, Col, Spin } from "antd";

const Loading: React.FC<{}> = () => {
  return (
    <div style={{ padding: "20px 0" }}>
      <Row justify="center">
        <Col>
          <Spin />
        </Col>
      </Row>
    </div>
  );
};

export default Loading;
