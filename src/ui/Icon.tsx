interface IconProps {
  imgUrl: string;
  color?: string;
  margin?: string;
  size?: string;
  cursor?: boolean;
}

function Icon({ imgUrl, color, margin, size, cursor }: IconProps) {
  return (
    <span
      className={`inline-block text-[16px] w-[1em] h-[1em] max-w-[1em] bg-current ${
        color ? `text-${color}` : "text-inherit"
      } ${margin ? margin : ""} ${
        size === "small" ? "text-xs" : size === "big" ? "text-[24px]" : ""
      } ${cursor ? "cursor-pointer" : ""}`}
      style={{
        maskImage: `url(${imgUrl})`,
        maskSize: "cover",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    ></span>
  );
}

export default Icon;
