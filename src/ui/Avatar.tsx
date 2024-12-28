import { PropsWithChildren } from "react";

function Avatar({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center items-center size-4 max-w-4 flex-[0 0 16px] text-xs leading-5 text-primary-500 bg-primary-100 border border-solid border-transparent rounded-[50%] overflow-hidden uppercase">
      <div className="relative size-full">{children}</div>
    </div>
  );
}

export default Avatar;
