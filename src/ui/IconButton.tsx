import Icon from "./Icon";

interface IconButtonProps {
  iconUrl: string;
  onClick?: () => void;
  margin?: string;
  isSpan?: boolean;
  isFilter?: boolean;
}

function IconButton({
  iconUrl,
  onClick,
  margin,
  isSpan,
  isFilter,
}: IconButtonProps) {
  return (
    <button
      className={`inline-flex justify-center items-center text-primary-500 w-8 max-w-8 h-8 m-0 p-0 rounded-lg relative align-middle cursor-pointer select-none text-sm md:text-[1rem] border-none hover:bg-secondary-200 ${
        isFilter ? "bg-secondary-200" : "bg-white"
      }`}
      onClick={onClick}
    >
      <Icon imgUrl={iconUrl} margin={margin} />
      {isSpan && <span className="text-primary-500"></span>}
    </button>
  );
}

export default IconButton;
