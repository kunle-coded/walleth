import { PropsWithChildren } from "react";

interface NetworkAvatarProps {
  size?: string;
}

function NetworkAvatar({
  children,
  size,
}: PropsWithChildren<NetworkAvatarProps>) {
  return (
    <div
      className={`flex justify-center items-center text-primary-500 bg-primary-100 border border-solid border-transparent rounded-[50%] overflow-hidden uppercase ${
        size === "big"
          ? "w-[24px] h-[24px] max-w-[24px] flex-[0_0_24px]"
          : "w-[16px] h-[16px] max-w-[16px] flex-[0_0_16px]"
      }`}
    >
      <div className="relative w-full h-full">{children}</div>
    </div>
  );
}

export default NetworkAvatar;
