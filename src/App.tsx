import React from "react";
import { message, Typography, Row, Col } from "antd";
import Title from "./components/Title";
import SearchInput from "./components/SearchInput";
import Products from "./components/List";
import useFetchProducts from "./hooks/useFetchProducts";
import useDebounce from "./hooks/useDebounce";
import "./style/main.scss";
import Note from "./components/Note";

const { Paragraph } = Typography;

function App() {
  const [messageApi, contextHolder] = message.useMessage();

  const [limit, setLimit] = React.useState<number>(20);

  const [keyword, setKeyword] = React.useState<string>("");

  const debounce = useDebounce(keyword);

  const { loading, error, hasMore, products, totalItems } = useFetchProducts({
    limit,
    q: debounce,
  });

  React.useEffect(() => {
    if (error) messageApi.error("Api network error");
  }, [error]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

  return (
    <React.Fragment>
      <div className="container">
        <Title />

        <SearchInput value={keyword} onChange={handleSearch} />

        <Products loading={loading} hasMore={hasMore} products={products} setLimit={setLimit} />

        {products.length === totalItems && <Note />}
      </div>

      {contextHolder}
    </React.Fragment>
  );
}

export default App;
