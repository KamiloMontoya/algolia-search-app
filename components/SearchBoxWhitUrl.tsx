import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSearchBox } from "react-instantsearch";

const SearchBoxWithURL = () => {
  const { query, refine } = useSearchBox();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get("query") || "";

    if (currentQuery !== query) {
      refine(currentQuery);
    }
  }, [query, refine, searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    refine(value);

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      className="w-full max-w-md  mb-4 border border-gray-300 rounded-l-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Search for restaurants..."
    />
  );
};

export default SearchBoxWithURL;
