import React from "react";
import TwoColumnOverview from "../components/TwoColumnOverview";
import SlideUpCard, { SlideUpCardPages } from "../components/SlideUpCard";
import Footer from "../components/Footer";
import ArrowButton from "../components/ArrowButton";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useNavigate } from "react-router-dom";

export default function ArAppPage() {
  let navigate = useNavigate();
  const onClickArrowForward = () => {
    navigate("/ans");
  };
  const onClickArrowBack = () => {
    navigate("/arf");
  };

  return (
    <ParallaxProvider>
      <div className="max-w-5xl mx-auto mt-7 px-4 sm:px-6 lg:px-8">
        <div className="text-4xl md:text-8xl text-center">
          <h1>WALLPAPER AR</h1>
          <h1>APP</h1>
        </div>
        <br />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <Parallax translateY={["-15%", "15%"]}>
            <img
              alt="Brownhomestead screen one"
              src="/images/brownhomestead.png"
              className="w-full h-auto object-contain"
            />
          </Parallax>
          <Parallax translateY={["15%", "-15%"]}>
            <img
              alt="Screenshot of AR App"
              src="/images/arapp.png"
              className="w-full h-auto object-contain"
            />
          </Parallax>
        </div>
        <br />
        <div className="mv-2 h-xl">
          <TwoColumnOverview
            headerText="Project Overview"
            bodyText="The purpose of this app was to develop an AR app showcasing the history of over 25 wallpapers in The Brown Homestead's ballroom. The app will display each wallpaper's location, usage, and time period, offering an engaging way to share the site's rich history."
            roleText="UI Lead"
            teamText="The Brown Homestead & Brock University"
            durationText="09/24 - 04/25"
            platformText="Tablet"
          />
        </div>
        <br />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <SlideUpCard
            headerText="Problem"
            bodyText="The ballroom has undergone numerous transformations, with over 25 different wallpapers used throughout its history. The challenge was to create a seamless, engaging way for visitors to visualize these changes without overwhelming them with too much information."
          />
          <SlideUpCard
            headerText="Goals"
            bodyText="Develop a fast, user-friendly AR experience aligned with The Brown Homestead's branding.
            Allow users to select different eras and see corresponding wallpapers and room layouts.
            Ensure adaptability for future updates as new historical discoveries emerge.
            Provide accessible educational insights without overloading users with details."
          />
          <SlideUpCardPages
            headerText="Solutions"
            textPages={[
              "Chronological Browsing Users can view wallpaper layers in the order they appeared across different eras. By swiping through the layer images displayed in the corner, they can see how the wallpaper designs changed within that particular era.",
              "Era-Specific Browsing Users can also directly turn the dial by pressing down on the anchor points and turning the timeline dial to select a specific era. Within that era, they can swipe through the image layers in the corner at their own pace. When the user stops swiping, the selected wallpaper layer will automatically display on the wall.",
              "Info Card An info card dynamically updates to show information about the layer being viewed. This card can be swiped on or off the screen, giving users control over whether they want to view additional information or not.",
              "Layer Users can view each layer individually and that layer will be shown only in the room it was located in at that time. If there is a variation to one layer then that layer card will have clickable tabs attached to it that will show the different variations of that layer that they can select.",
            ]}
          />
          <div className="m-5">
            <h3 className="text-xl md:text-3xl">User Flow</h3>
            <br />
            <img
              className="w-full h-72 border-black border-2"
              src="/images/aruserflow.png"
              alt="User flow diagram"
            />
          </div>
        </div>
        <br />
        <h3 className="text-xl md:text-3xl">Wireframes</h3>
        <br />
        <p className="text-lg md:text-xl">Low Fidelity</p>
        <br />
        <img
          className="w-full"
          src="/images/arlow.png"
          alt="Low fidelity wireframe"
        />
        <br />
        <p className="text-lg md:text-xl">Mid Fidelity</p>
        <br />
        <img
          className="w-full"
          src="/images/armid.png"
          alt="Mid fidelity wireframe"
        />
        <br />
        <p className="text-lg md:text-xl">High Fidelity</p>
        <br />
        <div className="grid w-full gap-2 grid-cols-1 md:grid-cols-2">
          <div className="w-full flex justify-center items-center">
            <img
              src="/images/brownhomestead.png"
              className="w-full h-auto object-contain max-w-[400px] md:max-w-full max-h-[400px] md:max-h-[600px]"
              alt="Brown homestead high fidelity mockup"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              src="/images/arapp.png"
              className="w-full h-auto object-contain max-w-[400px] md:max-w-full max-h-[400px] md:max-h-[600px]"
              alt="AR app high fidelity mockup"
            />
          </div>
        </div>
        <br />
        <div id="arrows-using" className="w-full relative">
          <div className="absolute left-0">
            <ArrowButton onClick={onClickArrowBack} direction="left" />
          </div>
          <div className="absolute right-0">
            <ArrowButton onClick={onClickArrowForward} direction="right" />
          </div>
        </div>
        <div className="flex justify-center w-full mt-10">
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
}
