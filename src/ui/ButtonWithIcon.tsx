import Icon from "./Icon";

interface ButtonWithIconProps {
  iconUrl: string;
  color?: string;
  margin?: string;
  onClick?: () => void;
}

function ButtonWithIcon({
  iconUrl,
  color,
  margin,
  onClick,
}: ButtonWithIconProps) {
  return (
    <button
      className={`flex justify-center items-center w-6 h-6 min-w-6 p-0 cursor-pointer bg-transparent rounded-lg border-none hover:bg-secondary-200 ${
        color ? color : "text-primary-500"
      } ${margin ? margin : ""}`}
      onClick={onClick}
    >
      <Icon imgUrl={iconUrl} />
    </button>
  );
}

export default ButtonWithIcon;
