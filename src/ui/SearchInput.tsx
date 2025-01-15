import Search from "../components/icons/Search";
import IconContainer from "./IconContainer";

interface SearchInputProps {
  placeholderText: string;
}

function SearchInput({ placeholderText }: SearchInputProps) {
  return (
    <div className="pb-4 pt-0">
      <div className="inline-flex items-center w-full h-8 px-4 bg-white border border-solid rounded border-[rgba(187,192,197,0.4)]">
        <IconContainer>
          <Search />
        </IconContainer>
        <input
          type="search"
          placeholder={placeholderText}
          autoComplete="off"
          className="w-full flex-grow pl-2 box-content leading-6 text-ellipsis whitespace-nowrap border-none bg-transparent focus-visible:outline-none placeholder:font-[Arial] placeholder:font-medium placeholder:text-secondary-500"
        />
      </div>
    </div>
  );
}

export default SearchInput;
