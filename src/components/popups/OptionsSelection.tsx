import { PropsWithChildren } from "react";

function OptionsSelection({ children }: PropsWithChildren) {
  return <div className="overflow-auto scrollbar-custom">{children}</div>;
}

export default OptionsSelection;
