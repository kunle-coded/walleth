import { PropsWithChildren } from "react";

interface IconContainerProps {
  margin?: boolean;
}

function IconContainer({
  children,
  margin,
}: PropsWithChildren<IconContainerProps>) {
  return (
    <span
      className={`inline-block flex-[0_0_1em] w-4 h-4 max-w-4 text-inherit bg-transparent relative ${
        margin ? "me-1" : ""
      }`}
    >
      {children}
    </span>
  );
}

export default IconContainer;
