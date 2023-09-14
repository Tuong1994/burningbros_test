import React from "react";
import { Typography, Row, Col } from "antd";

const { Paragraph } = Typography;

const Note: React.FC<{}> = () => {
  return (
    <Row justify="center" className="note">
      <Col>
        <Paragraph>No more products</Paragraph>
      </Col>
    </Row>
  );
};

export default Note;