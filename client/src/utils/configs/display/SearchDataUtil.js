import { useState, useMemo } from "react";

const SearchDataUtil = ({ data = [], setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useMemo(() => {
    if (searchTerm) {
      const results = data.filter((item) =>
        Object.values(item).some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
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
