import { useLayoutEffect } from "react";

const property = "--app-height";

function set() {
  document.documentElement.style.setProperty(
    property,
    document.documentElement.clientHeight + "px"
  );
}

/**
 * Work around the iOS Safari 100vh issue. References:
 * https://github.com/mvasin/react-div-100vh
 * https://dev.to/maciejtrzcinski/100vh-problem-with-ios-safari-3ge9
 */
export function useAppHeightCssVariable() {
  useLayoutEffect(() => {
    window.addEventListener("resize", set);
    set();
    return () => {
      window.removeEventListener("resize", set);
      document.documentElement.style.removeProperty(property);
    };
  }, []);
}
