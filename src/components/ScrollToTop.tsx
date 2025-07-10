// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jumps to top without smooth scrolling
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
