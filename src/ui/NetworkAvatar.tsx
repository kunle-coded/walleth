interface NetworkAvatarProps {
  size?: string;
  logoLink: string;
  networkName: string;
  borderColor?: boolean;
  type?: string;
}

function NetworkAvatar({
  size,
  logoLink,
  networkName,
  borderColor,
  type,
}: NetworkAvatarProps) {
  return (
    <div
      className={`flex justify-center items-center text-primary-500 text-xs leading-5 md:text-sm md:leading-snug  border-solid overflow-hidden uppercase ${
        type === "square" ? "rounded-md" : "rounded-[50%]"
      } ${borderColor ? "border-transparent" : "border-white border"} ${
        size === "large"
          ? "w-[32px] h-[32px] max-w-[32px] flex-[0_0_32px]"
          : size === "big"
          ? "w-[24px] h-[24px] max-w-[24px] flex-[0_0_24px]"
          : "w-[16px] h-[16px] max-w-[16px] flex-[0_0_16px]"
      } ${
        networkName === "Sepolia"
          ? "bg-[rgba(207_181_240)]"
          : "bg-[rgb(175,180,192,0.5)]"
      }`}
    >
      {logoLink === "" ? (
        networkName.slice(0, 1)
      ) : (
        <img
          src={logoLink}
          alt={`${networkName} logo`}
          className="w-full h-full bg-center"
        />
      )}
    </div>
  );
}

export default NetworkAvatar;
