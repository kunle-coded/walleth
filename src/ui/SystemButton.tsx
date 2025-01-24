import React from "react";

interface ButtonProps {
  label: string;
  type?: string;
  margin?: string;
  noHeight?: boolean;
  isDisabled?: boolean;

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SystemButton({
  type,
  onClick,
  label,
  noHeight,
  margin,
  isDisabled,
}: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center w-full px-4 py-3 box-border text-sm leading-[140%] font-semibold border border-solid rounded-[100px] appearance-none will-change-[box-shadow] transition-[box-shadow] ease-[cubic-bezier(0.6,_-0.28,_0.735,_0.045)] ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${noHeight ? "" : "min-h-[54px]"} ${margin ? margin : ""} ${
        type === "primary"
          ? "bg-brand-500 text-white border-brand-500"
          : type === "danger"
          ? "text-error-500 bg-white border-error-500 hover:shadow-[0_2px_8px_0_rgba(215,56,71,0.2)]"
          : "text-brand-500 bg-white border-brand-500 hover:shadow-[0_2px_8px_0_rgba(100,108,255,0.2)]"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default SystemButton;
