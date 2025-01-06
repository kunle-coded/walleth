import React, { useEffect, useState } from "react";

function usePopupCordinates(baseRef: React.RefObject<HTMLDivElement>) {
  const [isTop, setIsTop] = useState(false);

  const calcCoordinates = React.useCallback(() => {
    console.log("scrolling...");
    if (!baseRef.current) return;
    // const height = window.innerHeight;
    const rect = baseRef.current.getBoundingClientRect();
    console.log("Top:", rect.top, "Bottom:", rect.bottom);
    const top = rect.top;
    const bottom = rect.bottom;

    const spaceAbove = top + window.scrollY;

    const spaceBelow =
      document.documentElement.scrollHeight - (bottom + window.scrollY);

    console.log("Space above:", spaceAbove, "Space below:", spaceBelow);

    setIsTop(spaceAbove > spaceBelow);
    // if (spaceAbove > spaceBelow) {
    //   setIsTop(true);
    //   console.log("More space above. Do something.");
    // } else {
    //   setIsTop(false);
    //   console.log("More space below. Do something else.");
    // }
  }, [baseRef]);

  useEffect(() => {
    const handleScroll = () => {
      calcCoordinates();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [calcCoordinates]);

  return { isTop };
}

export default usePopupCordinates;
