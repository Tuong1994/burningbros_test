import React from "react";
import { Row, Col, Typography } from "antd";

const Title: React.FC<{}> = (props) => {
  return (
    <Row justify="center">
      <Col>
        <Typography.Title level={3}>Products</Typography.Title>
      </Col>
    </Row>
  );
};

export default Title;
