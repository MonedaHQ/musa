import { useEffect, useState } from "react";

export default function useScrollPosition(offset = 0) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || window.pageYOffset;
      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    // ✅ set initial value
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}
