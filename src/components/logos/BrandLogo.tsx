interface BrandLogoProps {
  imgUrl: string;
}

function BrandLogo({ imgUrl }: BrandLogoProps) {
  return (
    <span
      className="inline-block flex-[0_0_1em] text-[38px] w-[1em] h-[1em] max-w-[1em] bg-current text-inherit"
      style={{
        maskImage: `url(${imgUrl})`,
        maskSize: "cover",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    ></span>
  );
}

export default BrandLogo;
