import { PropsWithChildren } from "react";

function IconContainer({ children }: PropsWithChildren) {
  return (
    <span className="inline-block flex-[0_0_1em] w-4 h-4 max-w-4 text-inherit bg-transparent relative">
      {children}
    </span>
  );
}

export default IconContainer;
