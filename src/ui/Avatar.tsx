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
