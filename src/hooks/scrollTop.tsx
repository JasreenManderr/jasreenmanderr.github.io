import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// SEE https://stackoverflow.com/questions/70649779/react-router-rendered-page-scrolls-automatically-to-the-bottom

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
