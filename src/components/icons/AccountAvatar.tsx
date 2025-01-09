interface AccountAvatarProps {
  width?: string;
}

function AccountAvatar({ width }: AccountAvatarProps) {
  return (
    <div
      className={`flex justify-center items-center shrink-0 overflow-hidden rounded-xl ${
        width ? `w-${width} h-${width}` : "w-6 h-6"
      }`}
    >
      <div
        className={`inline-block m-0 p-0 overflow-hidden rounded-[50px] bg-[rgb(245,204,0)] ${
          width ? `w-${width} h-${width}` : "w-6 h-6"
        }`}
      >
        <svg x="0" y="0" width="24" height="24">
          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            transform="translate(-0.026388102344565605 1.7848418378332744) rotate(128.5 12 12)"
            fill="#1893F2"
          ></rect>
          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            transform="translate(-9.317579146755891 0.9246688550721497) rotate(244.6 12 12)"
            fill="#FA7D00"
          ></rect>
          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            transform="translate(5.531116143174069 18.74484605354085) rotate(172.8 12 12)"
            fill="#C81447"
          ></rect>
        </svg>
      </div>
    </div>
  );
}

export default AccountAvatar;
