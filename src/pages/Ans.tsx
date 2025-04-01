import React from "react";
import TwoColumnOverview from "../components/TwoColumnOverview";
import { SlideUpCardCustom } from "../components/SlideUpCard";
import Footer from "../components/Footer";
import ArrowButton from "../components/ArrowButton";
import { useNavigate } from "react-router-dom";

export default function AnsPage() {
  let navigate = useNavigate();
  const onClickArrowBack = () => {
    navigate("/arapp");
  };
  return (
    <>
      <div className="max-w-5xl">
        <h1 className="text-4xl md:text-8xl text-center">ADJECTIVE</h1>
        <h1 className="text-4xl md:text-8xl text-center">NOUN</h1>
        <br />
        <TwoColumnOverview
          headerText="PROJECT OVERVIEW"
          bodyText="As an intern at Adjective Noun Studios I was responsible for the redesigning of existing assets such as icons specifically ensuring they were of higher quality and more readable, I was also responsible for redesigning nodes and the GUI within unity’s editor. Furthermore, I also designed new icons for the editor that were more readable and intuitive."
          roleText="UI Intern"
          teamText="Adjective Noun Studios"
          durationText="01/25 - 04/25"
          platformText="Unity multi platform"
        />
        <br />
        <h3 className="text-lg md:text-2xl ">Assets</h3>
        <br />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div>
            <SlideUpCardCustom
              images={[
                "/images/scriptableboolicon.png",
                "/images/scriptableboolicon1.png",
                "/images/scriptablefloatmathicon.png",
                "/images/scriptablefloaticon.png",
                "/images/scriptableinticon.png",
                "/images/scriptablemathicon.png",
                "/images/scriptableoperatoricon.png",
                "/images/scriptablestringicon.png",
                "/images/ezdialoguemock.png",
              ]}
              headerText="Redesigned Assets"
            />
          </div>
          <div>
            <SlideUpCardCustom
              images={[
                "/images/sideopendefaulticon.png",
                "/images/sideopenselecticon.png",
                "/images/sliceicon.png",
              ]}
              headerText="New Assets"
            />
          </div>
        </div>
        <br />
        <h2 className="font-black text-xl md:text-2xl ">Unity Editor Window</h2>
        <br />
        <h3 className="font-bold text-lg md:text-xl">Overview</h3>
        <br />
        <p>
          The studio uses a custom node-based Unity editor window. During my internship, I did a UI audit to evaluate its usability and identify areas for improvement. I analyzed the editor’s layout, structure, and visual hierarchy. I wire framed solutions to address key usability issues, focusing on improving organization, enhancing readability, and optimizing user interactions for a more intuitive experience.
        </p>
        <br />
        <h4 className="font-bold text-lg md:text-xl">Challenges</h4>
        <br />
        <p>
          To identify key challenges within the UI, I conducted an audit by reviewing its overall structure, organization, and interactions. I examined key interface elements such as the sidebar, canvas, and settings, comparing them against usability best practices and industry standards. Through this audit, I identified the following three usability issues within the editor:
        </p>
        <br />
        <ul className="list-disc list-inside pl-5">
          <li>Lack of headers in the sidebar, making it difficult to scan information.</li>
          <li>Poor checkbox placement, where the option to close the sidebar was far from its instructional text.</li>
          <li>Cluttered canvas, with unnecessary elements, including a redundant center node.</li>
        </ul>

        
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <p className="pl-48">Before</p>
            <img className="w-50" src="/images/answireframe.png" />
          </div>
          <div>
            <p className="pl-48">After</p>
            <img src="/images/answireframe2.png" />
          </div>
        </div>
        <br />
        <h4 className="font-bold text-lg md:text-xl">
          Solutions
        </h4>
        <br />
        <p>
          Within my wire frame I implemented the following solutions to improve the usability of the editor:
        </p>
        <br />
        <ul className="list-disc list-inside pl-5">
          <li>Added clear headers to improve organization and readability in the sidebar.</li>
          <li>Replaced the checkbox with a more intuitive icon to streamline interaction.</li>
          <li>Moved center node settings to the sidebar under a newly created “Settings” section for better organization.</li>
          <li>Removed unnecessary canvas controls, leaving only the essential elements: sidebar toggle, zoom bar, and scale factor.</li>
          <li>Enhanced usability by simplifying the interface, creating a cleaner, more intuitive user experience.</li>
        </ul>
        <br />
        <h2 className="font-black text-xl md:text-2xl">Bullet In Time</h2>
        <br />
        <h3>Game Overview</h3>
        <p>A Bullet in Time is a puzzle-action game set in a cyber dystopia where players must rescue their scientist sister using a time-stopping gauntlet. Players plan and execute actions within a time-stop environment to solve puzzles, defeat enemies, and navigate obstacles. The game features a tactical approach where each level offers multiple solutions, combining elements of logic puzzles and action-based gameplay.</p>
        <br />
        <h3 className="font-bold text-lg md:text-xl">My Role:</h3>
        <ul className="list-disc list-inside pl-5">
          <li>Designed the HUD, dialogue boxes, action cards, and main menu with a cyber-futuristic theme and pixel art style.</li>
          <li>Selected fonts and color palette to enhance the game's visual theme and environment.</li>
          <li>Implemented UI assets in Unity and set up the canvas for proper functionality.</li>
        </ul>

        <br />
        <h3 className="font-bold text-lg md:text-xl">Wireframes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <p className="pl-48">Game</p>
            <img src="/images/gameoverlay.jpeg" />
          </div>
          <div>
            <p className="pl-48">Main menu</p>
            <img src="/images/menubtns.jpeg" />
          </div>
        </div>
        <br />
      



        
        <div id="arrows-using" className="w-full relative">
          <div className="absolute left-0">
            <ArrowButton onClick={onClickArrowBack} direction="left" />
          </div>
          <div className="absolute right-0">
            {/* <ArrowButton onClick={onClickArrowForward} direction="right" /> */}
          </div>
        </div>
        <br />
        <div className="flex justify-center w-full mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
