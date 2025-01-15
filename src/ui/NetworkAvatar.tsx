interface NetworkAvatarProps {
  size?: string;
  logoLink: string;
  networkName: string;
}

function NetworkAvatar({ size, logoLink, networkName }: NetworkAvatarProps) {
  return (
    <div
      className={`flex justify-center items-center text-primary-500 border border-solid border-white rounded-[50%] overflow-hidden uppercase shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] ${
        size === "big"
          ? "w-[24px] h-[24px] max-w-[24px] flex-[0_0_24px]"
          : "w-[16px] h-[16px] max-w-[16px] flex-[0_0_16px]"
      } ${
        networkName === "Sepolia"
          ? "bg-[rgba(207_181_240)]"
          : "bg-secondary-200"
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
