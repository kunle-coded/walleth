interface NetworkAvatarProps {
  size?: string;
  logoLink: string;
  networkName: string;
}

function NetworkAvatar({ size, logoLink, networkName }: NetworkAvatarProps) {
  return (
    <div
      className={`flex justify-center items-center text-primary-500 bg-secondary-200 border border-solid border-white rounded-[50%] overflow-hidden uppercase ${
        size === "big"
          ? "w-[24px] h-[24px] max-w-[24px] flex-[0_0_24px]"
          : "w-[16px] h-[16px] max-w-[16px] flex-[0_0_16px]"
      }`}
    >
      <img src={logoLink} alt={`${networkName} logo`} className="w-full" />
    </div>
  );
}

export default NetworkAvatar;
