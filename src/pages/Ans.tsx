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
        <h3 className="text-xl md:text-2xl">Wireframes</h3>
        <br />
        <img
          alt="ans wireframe"
          src="/images/answireframe.png"
          className="w-full h-full"
        />
        <br />
        <p>Before:</p>
        <ul className="list-disc ml-10">
          <li>Sidebar lacked headers, making information hard to scan.</li>
          <li>
            Checkbox to close the sidebar was far from its instructional text.
          </li>
          <li>
            Canvas was cluttered with unnecessary elements, including the center
            node.
          </li>
        </ul>
        <br />
        <p>After</p>
        <ul className="list-disc ml-10">
          <li>Added clear headers for better organization and readability.</li>
          <li>Replaced the checkbox with a more intuitive icon.</li>
          <li>Moved center node settings to the sidebar under "Settings."</li>
          <li>
            Kept only essential canvas controls: sidebar toggle icon, zoom bar,
            and scale factor.
          </li>
          <li>
            Improved usability and created a cleaner, more streamlined
            interface.
          </li>
        </ul>
        <br />

        <img
          alt="ans wireframe"
          src="/images/answireframe2.png"
          className="w-full h-full"
        />
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
