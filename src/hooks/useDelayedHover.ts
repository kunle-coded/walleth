import { useRef } from "react";

function useDelayedHover() {
  type Timeout = ReturnType<typeof setTimeout>;

  const timeoutRef = useRef<Timeout | null>(null);

  function handleInfoLeave(
    isTooltipEnter: boolean,
    setIsMouseEnter: (value: boolean) => void
  ) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      if (!isTooltipEnter) {
        setIsMouseEnter(false);
      }
    }, 1000);
  }

  function clearTimeoutOnUnmount() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  return { handleInfoLeave, clearTimeoutOnUnmount };
}

export default useDelayedHover;
