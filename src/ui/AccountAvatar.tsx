interface AccountAvatarProps {
  width?: string;
  border?: boolean;
  margin?: string;
}

function AccountAvatar({ width, border, margin }: AccountAvatarProps) {
  return (
    <div
      className={`flex justify-center items-center overflow-hidden rounded-[50%] bg-secondary-200 text-primary-500 text-[0.625rem] leading-4 md:text-xs md:leading-tight uppercase border border-solid ${
        border ? "border-white" : "border-transparent"
      } ${margin ? margin : "me-2"} ${
        width
          ? `w-[${width}px] max-w-[${width}px] h-[${width}px] flex-[0_0_${width}px]`
          : "w-8 max-w-8 h-8 flex-[0_0_32px]"
      }`}
    >
      <div className="flex">
        <div
          className={`inline-block m-0 p-0 overflow-hidden rounded-[50px] bg-[rgb(245,204,0)] ${
            width ? `w-[${width}px] h-[${width}px]` : "w-8 h-8"
          }`}
        >
          <svg
            x="0"
            y="0"
            width={width ? width : "32"}
            height={width ? width : "32"}
          >
            <rect
              x="0"
              y="0"
              width={width ? width : "32"}
              height={width ? width : "32"}
              transform="translate(-0.035184136459420805 2.3797891171110326) rotate(128.5 16 16)"
              fill="#1893F2"
            ></rect>
            <rect
              x="0"
              y="0"
              width={width ? width : "32"}
              height={width ? width : "32"}
              transform="translate(-12.423438862341186 1.2328918067628662) rotate(244.6 16 16)"
              fill="#FA7D00"
            ></rect>
            <rect
              x="0"
              y="0"
              width={width ? width : "32"}
              height={width ? width : "32"}
              transform="translate(7.374821524232092 24.9931280713878) rotate(172.8 16 16)"
              fill="#C81447"
            ></rect>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AccountAvatar;
