import React, { PropsWithChildren } from "react";

interface ButtonProps {
  type: string;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  type,
  isDisabled,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <>
      {type === "primary" ? (
        <button
          className={`bg-brand-500 text-white text-center font-medium capitalize cursor-pointer px-5 py-3 rounded-md w-full focus:outline-none appearance-none transition-all ${
            isDisabled ? "bg-gray-200 cursor-not-allowed" : "hover:bg-brand-400"
          }`}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          className="bg-brand-100 text-secondary-600 font-medium text-center border capitalize cursor-pointer px-5 py-3 rounded-md w-full focus:outline-none appearance-none hover:border-brand-400 transition-all"
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
