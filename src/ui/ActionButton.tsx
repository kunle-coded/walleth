import Icon from "./Icon";

interface ActionButtonProps {
  text: string;
  iconUrl: string;
  isDisabled?: boolean;
  onClick: () => void;
}

function ActionButton({
  text,
  iconUrl,
  isDisabled,
  onClick,
}: ActionButtonProps) {
  return (
    <button
      role="link"
      className={`flex flex-col items-center text-center w-16 text-sm leading-snug font-normal bg-[unset] text-primary-500 border-none ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center w-9 h-9 rounded-full bg-brand-500 mb-1 mt-0 ms-auto me-auto">
        <Icon imgUrl={iconUrl} color="white" />
      </div>
      <p className="md:text-sm text-ellipsis whitespace-nowrap text-secondary-900 font-medium overflow-hidden">
        {text}
      </p>
    </button>
  );
}

export default ActionButton;
