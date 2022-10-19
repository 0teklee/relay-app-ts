import { useCallback, useRef } from "react";

import { UseQueryLoaderLoadQueryOptions } from "react-relay";

import { pages_index_search_Query$variables } from "libs/relay/__generated__/pages_index_search_Query.graphql";

const SearchBar = ({
  loadQuery,
}: {
  loadQuery: (
    variables: pages_index_search_Query$variables,
    options?: UseQueryLoaderLoadQueryOptions | undefined
  ) => void;
}) => {
  const textRef = useRef<string>("");
  const handleSearch = useCallback(() => {
    loadQuery({
      type: "REPOSITORY",
      first: 5,
      query: textRef.current,
    });
  }, [loadQuery]);

  return (
    <div className="flex mb-10">
      <form>
        <input
          type="text"
          className="w-72 pt-3 pb-3 pl-6 pr-2 rounded-l-xl border-t border-b border-l border-grey-700 outline-none focus-within:border-blue-400"
          onChange={(e) => {
            textRef.current = e.target.value;
          }}
        />
        <button
          type="submit"
          className="p-3 rounded-r-xl border-t border-b border-r border-blue-400 bg-blue-400 text-white"
          onClick={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          검색
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
