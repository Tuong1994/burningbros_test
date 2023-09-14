import React from "react";
import { Row, Col, Empty } from "antd";
import { IProduct } from "../../interface/product";
import Loading from "../Loading";
import ProductItem from "./Item";

interface ProductsProps {
  loading: boolean;
  hasMore: boolean;
  products: IProduct[];
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const Products: React.FC<ProductsProps> = ({ loading, hasMore, products, setLimit }) => {
  const observer = React.useRef<IntersectionObserver>();

  // Increased limit by 20 when scroll to last product
  const lastElementRef = React.useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) setLimit((prev) => prev + 20);
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const renderProducts = () => {
    return products.map((product, idx) => {
      if (products.length === idx + 1) {
        return (
          <Col xs={24} md={12} lg={6} span={6} key={product.id}>
            <ProductItem ref={lastElementRef} product={product} />
          </Col>
        );
      } else
        return (
          <Col xs={24} md={12} lg={6} span={6} key={product.id}>
            <ProductItem product={product} />
          </Col>
        );
    });
  };

  return (
    <React.Fragment>
      {products.length > 0 ? <Row gutter={[15, 15]}>{renderProducts()}</Row> : <Empty />}

      {loading && <Loading />}
    </React.Fragment>
  );
};

export default React.memo(Products);
