import React from "react";

const useDebounce = (keyword: string) => {
  const [debounce, setDebounce] = React.useState<string>("");

  const typingRef = React.useRef<any>();

  React.useEffect(() => {
    if (typingRef.current) clearTimeout(typingRef.current);

    typingRef.current = setTimeout(() => setDebounce(keyword), 1000);
  }, [keyword]);

  return debounce;
};

export default useDebounce;
