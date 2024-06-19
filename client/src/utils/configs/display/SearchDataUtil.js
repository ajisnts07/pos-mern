import { useState, useMemo, useEffect } from "react";

const SearchDataUtil = ({ data = [], setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      const results = data.filter((item) =>
        Object.values(item).some((value) => {
          if (typeof value === "string") {
            return value.toLowerCase().includes(searchTerm.toLowerCase());
          }
          return false;
        }),
      );

      setSearchResult(results);
    } else {
      setSearchResult(data);
    }
  }, [data, searchTerm, setSearchResult]);

  const handleSearchData = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return { searchTerm, handleSearchData };
};

export default SearchDataUtil;
