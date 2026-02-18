import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollManager() {
  const { pathname } = useLocation();
  const navType = useNavigationType(); // PUSH | POP | REPLACE

  useEffect(() => {
    // Back/forward: let ScrollRestoration restore
    if (navType === "POP") return;

    // New navigation: jump to top instantly
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname, navType]);

  return null;
}
