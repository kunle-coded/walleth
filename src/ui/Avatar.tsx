interface AvatarProps {
  imgUrl: string;
  color?: string;
  margin?: string;
}

function Avatar({ imgUrl, color, margin }: AvatarProps) {
  return (
    <span
      className={`inline-block w-4 h-4 max-w-4 ms-1 text-inherit bg-current ${
        color ? color : "text-secondary-600"
      } ${margin ? margin : ""}`}
      style={{
        maskImage: `url(${imgUrl})`,
        maskSize: "cover",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    ></span>
  );
}

export default Avatar;

{
  /* <svg x="0" y="0" width="16" height="16"><rect x="0" y="0" width="16" height="16" transform="translate(-0.017592068229710402 1.1898945585555163) rotate(128.5 8 8)" fill="#1893F2"></rect><rect x="0" y="0" width="16" height="16" transform="translate(-6.211719431170593 0.6164459033814331) rotate(244.6 8 8)" fill="#FA7D00"></rect><rect x="0" y="0" width="16" height="16" transform="translate(3.687410762116046 12.4965640356939) rotate(172.8 8 8)" fill="#C81447"></rect></svg> */
}
