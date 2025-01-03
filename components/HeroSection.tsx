"use client";
import { useNavBarContext } from "@/contexts/NavbarContext";
import HeroSlider from "./HeroSlider";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const NavBarContext = useNavBarContext();

  useEffect(() => {
    Math.round(headerRef.current?.getBoundingClientRect().top ?? 0) == 64
      ? NavBarContext?.setOverlaping(false)
      : NavBarContext?.setOverlaping(true);
    function handleScroll() {
      Math.round(headerRef.current?.getBoundingClientRect().top ?? 0) == 64
        ? NavBarContext?.setOverlaping(false)
        : NavBarContext?.setOverlaping(true);
    }
    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={targetRef} className="relative md:h-[300vh] col-span-12">
      <div className="grid grid-rows-[max-content,_1fr]  col-span-12 sticky top-0 px-2 md:px-0 min-h-[100vh] overflow-hidden pt-16 pb-4">
        <div className="relative z-10 mix-blend-difference md:pl-2 w-full">
          <h1 ref={headerRef} className="uppercase text-header font-bold">
            Get the latest laptops and tech accessories
          </h1>
        </div>

        <div className="hidden md:block">
          <HeroSlider x={x} />
        </div>

        <div className="md:hidden">
          <HeroSlider />
        </div>
      </div>
    </div>
  );
}
