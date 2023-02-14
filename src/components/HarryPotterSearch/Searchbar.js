import { useEffect, useState } from "react";

const Searchbar = ({ data, setSearchResults }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredData);
  }, [data, setSearchResults, query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search here ..."
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
};

export default Searchbar;
