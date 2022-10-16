import { Dispatch, SetStateAction, useRef } from "react";

const SearchBar = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<string>>;
}) => {
  const textRef = useRef<string>("");
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
            setState(textRef.current);
          }}
        >
          검색
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
