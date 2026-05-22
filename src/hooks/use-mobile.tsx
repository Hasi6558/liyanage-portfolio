import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const checkMobile = () => {
      const userAgent =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const screenWidth = window.innerWidth < MOBILE_BREAKPOINT;
      return userAgent || screenWidth;
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(checkMobile());
    };
    mql.addEventListener("change", onChange);
    setIsMobile(checkMobile());
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
