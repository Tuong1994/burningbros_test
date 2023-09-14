import React from "react";
import { Row, Col, Card, Divider, Typography, Space } from "antd";
import { StarFilled } from "@ant-design/icons";
import { IProduct } from "../../interface/product";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InfoRow from "../InfoRow";
import utils from "../../utils";
import "react-lazy-load-image-component/src/effects/blur.css";

const { Title, Paragraph } = Typography;

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: React.ForwardRefRenderFunction<HTMLDivElement, ProductItemProps> = (
  { product },
  ref
) => {
  const { sliceString } = utils;

  return (
    <Card ref={ref} hoverable className="product-item">
      <Row justify="center">
        <Col>
          <LazyLoadImage
            className="item-image"
            effect="blur"
            width="100%"
            height={200}
            threshold={300}
            src={product.images[0]}
          />
        </Col>
      </Row>

      <Divider />

      <Title className="item-title" level={5}>
        {sliceString(product.title, 23)}
      </Title>

      <InfoRow title="Category" content={product.category} />

      <InfoRow title="Price" content={`$ ${product.price}`} />

      <InfoRow
        title="Rating"
        content={
          <Space>
            <StarFilled />
            {product.rating}
          </Space>
        }
      />

      <InfoRow
        type="vertical"
        title="Description"
        content={
          <Paragraph className="item-description">
            {sliceString(product.description, 80)}
          </Paragraph>
        }
      />
    </Card>
  );
};

export default React.forwardRef(ProductItem);
