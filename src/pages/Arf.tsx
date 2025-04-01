import FlatList from "flatlist-react/lib";
import Footer from "../components/Footer";
import TwoColumnOverview from "../components/TwoColumnOverview";
import SlideUpCard from "../components/SlideUpCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowButton from "../components/ArrowButton";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function ArfPage() {
  const { width } = useWindowDimensions();
  let navigate = useNavigate();
  const onClickArrowForward = () => {
    navigate("/arapp");
  };

  return (
    <div className="w-full md:max-w-5xl mx-auto mt-7 px-4 sm:px-6 md:px-8">
      <h1 className="text-4xl md:text-6xl lg:text-8xl text-center font-bold">
        A.R.F SQUAD
      </h1>
      <br />
      {/*<div className="grid grid-cols-1" id="carousel-arf">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay={width <= 768 ? false : true}
          autoPlaySpeed={3000}
          centerMode={true}
          draggable
          infinite={width <= 768 ? false : true}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          itemClass="px-4 md:p-6"
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
            tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
            mobile: {
              breakpoint: { max: 768, min: 0 },
              items: 2,
              slidesToSlide: 1,
            },
          }}
          showDots={false}
          slidesToSlide={1}
          swipeable
          transitionDuration={1200}
        >
          <img
            className="max-w-24 md:max-w-full w-24 md:w-full"
            alt="A.R.F squad screenshot"
            src="/images/arf.png"
            style={{ aspectRatio: 16 / 9 }}
          />
          <img
            className="max-w-24 md:max-w-full w-24 md:w-full"
            alt="UI winning screen"
            src="/images/uiwinscreen.png"
            style={{ aspectRatio: 16 / 9 }}
          />
          <img
            className="max-w-24 md:max-w-full w-24 md:w-full"
            alt="UI pause menu"
            src="/images/uipausemenu.png"
            style={{ aspectRatio: 16 / 9 }}
          />
          <img
            className="max-w-24 md:max-w-full w-24 md:w-full"
            alt="UI pause graphics menu"
            src="/images/uipausegraphics.png"
            style={{ aspectRatio: 16 / 9 }}
          />
          <img
            className="max-w-24 md:max-w-full w-24 md:w-full"
            alt="Audio settings"
            src="/images/uiaudiosettings.png"
            style={{ aspectRatio: 16 / 9 }}
          />
        </Carousel>
      </div>*/}
      <br />
      <TwoColumnOverview
        teamText="Buggy Room Studios"
        roleText="UI Designer and VFX Animator"
        durationText="09/24 - 04/25"
        platformText="Console"
        headerText="Core Concept"
        bodyText="A.R.F. Squad is a 4-player couch PVP aerial combat game where players play as plastic toy dogs in planes with the objective being to cut and collect the sausages attached to the opponents' planes while protecting their own sausage link."
      />
      <br />
      <h2 className="text-2xl font-semibold">Design Pillars</h2>
      <br />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <SlideUpCard
          headerText="“Small Scale, Big Attitude Dogs”"
          bodyText="Exaggerated Scale in UI – The interface should feel immersive and match the oversized world. Dynamic HUD Elements – UI should react to game physics (e.g., bouncing icons, movement shifts)."
        />
        <SlideUpCard
          headerText="“Goofy, Party, Fun”"
          bodyText="Simple & Intuitive UI – Players should jump in without a steep learning curve. Playful Visuals & Motion – The UI should be expressive, animated, and energetic. Bold Colors & Cartoon Style – Reinforce the game’s fun and nostalgic theme."
        />
        
      </div>
      <br />
      <div className="">
        <SlideUpCard
          headerText="“Continuous Excitement & Discovery”"
          bodyText="Clear Feedback for Game Events – Players should always know when they’re leading or losing.
Interactive UI – The UI should give a sense of joy and  encourage discovery through interactive elements, playful animations, and the HUD."
        />
      </div>
      <br />
      <div className="grid grid-cols-1">
        <div style={{ width: 15000, height: "100%" }} className=""></div>
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-center">UI Art</h2>
      <div className="grid gap-6 grid-cols-1">
        <FlatList
          list={[
            "/images/menuassets.png",
            "/images/newwinscreenassets.png",
            "/images/selectionscreenassets.png",
            "/images/newhudassets.png",
            "/images/arfscreenmockup1.png",
            "/images/arfscreenmockup2.png",
            "/images/arfscreenmockup3.png",
            "/images/arfscreenmockup4.png"
          ]}
          renderItem={(item, i) => (
            <>
              {item == "/images/arfscreenmockup1.png" && <h3 style={{fontWeight: "900"}} className="font-bold text-center text-lg md:text-xl">Screen Mockups</h3> }
            <img
              src={item}
              alt={`ArfSquad Asset ${i + 1}`}
              className="w-full h-full"
            />

            </>
          )}
        />
      </div>
      <br />
      <h3 style={{fontWeight: "900"}} className="font-bold text-center text-lg md:text-xl">Animation Reel</h3> 
      <br />
      <video controls className="w-full h-full" src="/videos/arfgameplay.mp4" />
      <br />

      <div id="arrows-using" className="w-full relative">
        <div className="absolute left-0">
          {/* <ArrowButton onClick={On} direction="left" /> */}
        </div>
        <div className="absolute right-0">
          <ArrowButton onClick={onClickArrowForward} direction="right" />
        </div>
      </div>
      <br />
      <div className="flex justify-center w-full mt-10">
        <Footer />
      </div>
    </div>
  );
}
