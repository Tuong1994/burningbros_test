import React from "react";
import { IQuery } from "../interface/base";
import { IProduct } from "../interface/product";
import AxiosClient from "../api";
import productApiPath from "../api/path/product";
import utils from "../utils";

const useFetchProducts = (query: IQuery) => {
  const { limit, q } = query;

  const { getQuery } = utils;

  const [loading, setLoading] = React.useState<boolean>(false);

  const [error, setError] = React.useState<boolean>(false);

  const [hasMore, setHasMore] = React.useState<boolean>(false);

  const [products, setProducts] = React.useState<IProduct[]>([]);

  const [totalItems, setTotalItems] = React.useState<number>(0);

  // Fetch products
  const getProducts = async () => {
    setLoading(true);

    setError(false);

    try {
      const res = await AxiosClient.get(productApiPath.list + getQuery(query));

      const data = res.data.products ? res.data.products : [];

      const total = res.data.total ? res.data.total : 0;

      setHasMore(data.length < total);

      setTotalItems(total);

      setProducts([...data]);
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  // Search products
  const searchProducts = async () => {
    setLoading(true);

    setError(false);

    try {
      const res = await AxiosClient.get(productApiPath.search + getQuery(query));

      const data = res.data.products ? res.data.products : [];

      const total = res.data.total ? res.data.total : 0;

      setHasMore(data.length < total);

      setTotalItems(total);

      setProducts([...data]);
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    if (!q) getProducts();
  }, [limit, q]);

  React.useEffect(() => {
    if (products.length > 0) setProducts([]);

    if (q) searchProducts();
  }, [q]);

  return { loading, error, hasMore, products, totalItems };
};

export default useFetchProducts;
