import { PropsWithChildren } from "react";

function ButtonWrapper({ children }: PropsWithChildren) {
  return (
    <div className="w-full mt-16 flex flex-col items-center gap-3">
      {children}
    </div>
  );
}

export default ButtonWrapper;
