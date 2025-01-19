import { useState } from "react";
import Icon from "./Icon";

interface SearchInputProps {
  placeholderText: string;
  padding?: boolean;
  isBig?: boolean;
}

function SearchInput({ placeholderText, padding, isBig }: SearchInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  function handleFocus() {
    setIsFocus(true);
  }

  function handleBlur() {
    setIsFocus(false);
  }

  return (
    <div className={`pb-4 pt-0 ${padding ? "px-4" : ""}`}>
      <div
        className={`inline-flex items-center w-full px-4 bg-white border border-solid rounded border-[rgba(187,192,197,0.9)] hover:border-brand-500 ${
          isFocus ? "border-brand-500 border-2" : ""
        } ${isBig ? "h-12" : "h-8"}`}
      >
        <Icon imgUrl="src/assets/images/search.svg" />
        <input
          type="search"
          placeholder={placeholderText}
          autoComplete="off"
          className="w-full flex-grow pl-2 box-content leading-6 text-ellipsis whitespace-nowrap border-none bg-transparent focus-visible:outline-none placeholder:font-[Arial] placeholder:font-medium placeholder:text-secondary-500"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
}

export default SearchInput;
