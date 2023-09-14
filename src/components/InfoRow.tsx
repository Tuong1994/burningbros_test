import React from "react";
import { Row, Col, Typography } from "antd";

const { Paragraph } = Typography;

interface InfoRowProps {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  type?: "horizontal" | "vertical";
}

const InfoRow: React.FC<InfoRowProps> = ({
  title = "Title",
  content = "Content",
  type = "horizontal",
}) => {
  return (
    <React.Fragment>
      {type === "horizontal" && (
        <Row className="info-row">
          <Col span={8}>
            <Paragraph className="row-title">{title}</Paragraph>
          </Col>
          <Col span={16}>
            <Paragraph className="row-content">{content}</Paragraph>
          </Col>
        </Row>
      )}

      {type === "vertical" && (
        <div className="info-row">
          <Paragraph className="row-title">{title}</Paragraph>
          <Paragraph className="row-content">{content}</Paragraph>
        </div>
      )}
    </React.Fragment>
  );
};

export default InfoRow;
