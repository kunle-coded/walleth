import React, { useEffect, useState } from "react";

type RefTypes = React.RefObject<HTMLDivElement>;

function usePopupCordinates() {
  const [isTop, setIsTop] = useState(false);
  const [above, setAbove] = useState(0);
  const [below, setBelow] = useState(0);
  const [coordinates, setCoordinates] = useState({ top: 0, left: 0 });

  const calcCoordinates = (baseRef: RefTypes) => {
    if (!baseRef.current) return;

    const rect = baseRef.current.getBoundingClientRect();
    const top = rect.top;
    const bottom = rect.bottom;

    const spaceAbove = top + window.scrollY;
    const spaceBelow =
      document.documentElement.scrollHeight - (bottom + window.scrollY);

    setAbove(spaceAbove);
    setBelow(spaceBelow);

    // Set coordinates
    // const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    setCoordinates({
      left: Math.min(rect.left, viewportWidth - 200), // Adjust for tooltip width
      top: isTop ? rect.top - 50 : rect.bottom + 10, // Adjust for tooltip height
    });
  };

  useEffect(() => {
    if (above > below && below < 75) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  }, [above, below, isTop]);

  return { isTop, coordinates, calcCoordinates };
}

export default usePopupCordinates;
