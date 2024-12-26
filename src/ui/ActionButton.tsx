import { PropsWithChildren } from "react";

interface ActionButtonProps {
  text: string;
}

function ActionButton({
  text,
  children,
}: PropsWithChildren<ActionButtonProps>) {
  return (
    <button className="flex flex-col items-center text-center w-16 text-sm leading-snug font-normal cursor-pointer bg-[unset] text-primary-500 border-none">
      <div className="flex justify-center items-center w-9 h-9 rounded-full bg-brand-500 mb-1 mt-0 ms-auto me-auto">
        <span className="relative w-4 h-4 text-white">{children}</span>
      </div>
      <p className="md:text-sm text-ellipsis whitespace-nowrap text-secondary-900 font-medium overflow-hidden">
        {text}
      </p>
    </button>
  );
}

export default ActionButton;
