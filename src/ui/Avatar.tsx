interface AvatarProps {
  imgUrl: string;
}

function Avatar({ imgUrl }: AvatarProps) {
  return (
    <span
      className="inline-block w-4 h-4 max-w-4 ms-1 text-inherit bg-current text-secondary-600"
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
