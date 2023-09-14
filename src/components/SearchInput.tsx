import React from "react";
import * as Antd from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Input, Row, Col, Divider } = Antd;

interface SearchInputProps extends Antd.InputProps {}

const SearchInput: React.FC<SearchInputProps> = ({ ...restProps }) => {
  return (
    <React.Fragment>
      <Row justify="center">
        <Col xs={24} md={12} lg={8} span={8}>
          <Input {...restProps} placeholder="Search...." suffix={<SearchOutlined />} />
        </Col>
      </Row>

      <Divider />
    </React.Fragment>
  );
};

export default SearchInput;
