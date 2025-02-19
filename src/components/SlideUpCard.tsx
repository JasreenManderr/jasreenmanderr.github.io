import { useState } from "react";
import ArrowButton from "./ArrowButton";

export default function SlideUpCard({
  headerText,
  bodyText,
}: {
  headerText: string;
  bodyText: string;
}) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="rounded-lg w-full max-w-sm md:max-w-md lg:max-w-lg min-h-96 md:min-h-80 
                 bg-gradient-to-tr from-[#CEC1C8] to-white bg-[size:_200%] 
                 hover:bg-[position:_100%_100%] transition-all duration-500 
                 flex flex-col justify-center items-center p-4"
    >
      <h1
        className={`text-center text-lg md:text-2xl transition-all duration-500 m-4 ${
          isHover ? "-translate-y-6" : ""
        }`}
      >
        {headerText}
      </h1>
      {isHover && (
        <p className="mt-2 text-center whitespace-pre-line">{bodyText}</p>
      )}
    </div>
  );
}

export function SlideUpCardCustom({
  headerText,
  images,
}: {
  headerText: string;
  images: string[];
}) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="rounded-lg w-full h-96 bg-gradient-to-tr from-[#CEC1C8] to-white
                                                         bg-[position:_0%_0%] hover:bg-[position:_100%_100%] bg-[size:_200%]
                                                                          transition-all duration-500 flex flex-col justify-center items-center p-4"
      id="fancy-card"
    >
      {/* Header text */}
      <h1
        className={`text-center transition-all duration-500 m-4 ${
          isHover ? "-translate-y-12" : ""
        }`}
      >
        {headerText}
      </h1>

      {/* Grid of images (replaces body text area) */}
      {isHover && (
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              width={50}
              height={50}
              alt={`image-${index}`}
              className="object-cover rounded-lg"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function SlideUpCardPages({
  headerText,
  textPages,
}: {
  headerText: string;
  textPages: string[];
}) {
  const [isHover, setIsHover] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const nextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActivePage((prev) => (prev + 1) % textPages.length);
  };

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="rounded-lg w-full min-h-96 bg-gradient-to-tr from-[#CEC1C8] to-white
                 bg-[position:_0%_0%] hover:bg-[position:_100%_100%] bg-[size:_200%]
                 transition-all duration-500 flex flex-col justify-center items-center p-4"
      id="fancy-card"
    >
      {/* Header text */}
      <h1
        className={`text-center text-lg md:text-2xl transition-all duration-500 m-4 ${
          isHover ? "-translate-y-4" : ""
        }`}
      >
        {headerText}
      </h1>

      {/* Multi-text carousel */}
      {isHover && (
        <div className="w-full flex flex-col items-center">
          <div className="w-full h-48 flex justify-center items-center p-4 ">
            <p className="text-center">{textPages[activePage]}</p>
          </div>
          {/* Dots (left) and arrow button (right) */}
          <div className="w-full flex items-center mt-4">
            {/* Dots at left corner */}
            <div className="flex space-x-2">
              {textPages.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activePage ? "bg-gray-400" : "bg-gray-200"
                  }`}
                ></div>
              ))}
            </div>
            {/* Arrow button at right */}
            <ArrowButton onClick={nextPage} />
          </div>
        </div>
      )}
    </div>
  );
}
