import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollCard from "../components/ScrollCard";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import Footer from "../components/Footer";
import useWindowDimensions from "../hooks/useWindowDimensions";

const BottomBlur = () => {
  const { ref } = useParallax<HTMLDivElement>({ opacity: [1, 0] });
  return (
    <div
      ref={ref}
      className="absolute block h-96 lg:h-96 w-full left-0 backdrop-blur-xl pointer-events-none z-20"
    />
  );
};

const MobileBottomBlur = () => {
  const { ref } = useParallax<HTMLDivElement>({ opacity: [1, 0] });
  return (
    <div
      ref={ref}
      className="h-[10rem] absolute block bottom-0 left-0 backdrop-blur-xl pointer-events-none z-10"
    />
  );
};

export default function Home() {
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();

  const targetRef = useRef<HTMLDivElement | null>(null);
  const endScroll = height * 0.5;
  const startScroll = 0;

  const [targetElement, setElement] = useState<any>();
  useEffect(() => {
    setElement(targetRef.current ? targetRef.current : null);
  }, []);

  const isMobile = width <= 768;

  return (
    <ParallaxProvider>
      <div
        style={{
          minHeight: height <= 768 ? height + height / 2 : height + height / 2,
        }}
      >
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mt-10 md:mt-20 max-w-full">
          <h1 className="text-6xl md:text-8xl lg:text-10xl">JASREEN</h1>
          <h1 className="text-6xl md:text-8xl lg:text-10xl">MANDER</h1>
          <h1 className="text-4xl md:text-8xl lg:text-10xl mt-4">
            A UI DESIGNER
          </h1>
          <h1 className="text-4xl md:text-8xl lg:text-10xl">BASED IN</h1>
          <h1 className="text-4xl md:text-8xl lg:text-10xl">CANADA</h1>
        </div>
        {/* Bottom Blur Effect (Above Recent Work) */}
        <BottomBlur />
        {/* Animated Scroll Cards */}
        <div className="md:flex justify-center items-center gap-10 mt-16">
          <ScrollCard
            onClick={() => navigate("/ans")}
            img_source="/images/ans.png"
            rotate={[20, 0]}
            translateX={[-20, isMobile ? 35 : 148]}
            translateY={[10, isMobile ? 600 : 400]}
            title="Adjective Noun Studios"
            description="UI/UX"
            props={{
              startScroll: 0,
              endScroll: endScroll,
            }}
          />
          <ScrollCard
            onClick={() => navigate("/arf")}
            img_source="/images/arf.png"
            translateX={[20, 35]}
            translateY={[-5, isMobile ? 250 : 150]}
            title="A.R.F Squad"
            description="UI/UX"
            props={{
              startScroll: 0,
              endScroll: endScroll,
            }}
          />
          <ScrollCard
            onClick={() => navigate("/arapp")}
            img_source="/images/arapp.png"
            rotate={[isMobile ? -30 : 80, 0]}
            translateX={[isMobile ? 50 : 30, isMobile ? 35 : -75]}
            translateY={[isMobile ? -120 : 0, 280]}
            title="Wallpaper AR App"
            description="UI/UX"
            props={{
              startScroll: 0,
              endScroll: endScroll,
            }}
          />
        </div>
        <div className="w-full">
          <h1 className="text-lg md:text-3xl">Recent work</h1>
        </div>
      </div>
      <div className="ml-[25%] md:h-[10rem] md:mt-96">
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
