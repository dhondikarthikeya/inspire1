import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTopInstant() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType(); // "PUSH" | "POP" | "REPLACE"

  useLayoutEffect(() => {
    // Back/forward: allow restoring previous scroll position
    if (navType === "POP") return;

    // If using hash links like /about#team, don't force top
    if (hash) return;

    // Force instant jump (even if someone adds smooth scroll later)
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname, hash, navType]);

  return null;
}
