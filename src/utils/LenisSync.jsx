// src/utils/LenisSync.jsx (example)
import { useEffect } from "react";
import { useLenis } from "./../constants/lenis.jsx"; // re-exports from 'lenis/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisSync({ children }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // scroller proxy so ScrollTrigger reads Lenis position
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value);
        } else {
          return lenis.scroll.instance?.scroll?.y ?? 0;
        }
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });

    // update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // refresh on resize / unmount
    const onRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onRefresh);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      window.removeEventListener("resize", onRefresh);
      ScrollTrigger.kill();
    };
  }, [lenis]);

  return children;
}