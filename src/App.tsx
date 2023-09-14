import React from "react";
import Title from "./components/Title";
import SearchInput from "./components/SearchInput";
import Products from "./components/List";
import useFetchProducts from "./hooks/useFetchProducts";
import useDebounce from "./hooks/useDebounce";
import "./style/main.scss";


function App() {
  const [limit, setLimit] = React.useState<number>(20);

  const [keyword, setKeyword] = React.useState<string>("");

  const debounce = useDebounce(keyword);

  const { loading, error, hasMore, products } = useFetchProducts({ limit, q: debounce });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

  return (
    <div className="container">
      <Title />

      <SearchInput value={keyword} onChange={handleSearch} />

      <Products
        loading={loading}
        error={error}
        hasMore={hasMore}
        products={products}
        setLimit={setLimit}
      />
    </div>
  );
}

export default App;
