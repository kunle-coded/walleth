import React, { PropsWithChildren } from "react";

interface ButtonProps {
  type: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function LinkButton({
  type,
  href,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <>
      {type === "primary" ? (
        <button
          // href={href}
          className="bg-brand-500 text-white text-center font-medium capitalize cursor-pointer px-5 py-3 rounded-md w-full focus:outline-none appearance-none hover:bg-brand-400 hover:text-white transition-all"
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          // href={href}
          className="bg-transparent text-brand-500 text-center border border-brand-500 font-medium capitalize cursor-pointer px-5 py-3 rounded-md w-full focus:outline-none appearance-none hover:border-brand-400 hover:bg-brand-100 transition-all"
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default LinkButton;
