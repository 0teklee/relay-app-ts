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
          className="w-72 pt-3 pb-3 pl-6 pr-2 rounded-l-xl"
          onChange={(e) => {
            textRef.current = e.target.value;
          }}
        />
        <button
          type="submit"
          className="p-3 rounded-r-xl bg-blue-400 text-white"
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
