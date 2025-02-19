import { Parallax, ParallaxProps } from "react-scroll-parallax";
import React from "react";

// Define the types for the props
type ScrollCardProps = {
  img_source: string;
  translateX: any | undefined;
  translateY: any | undefined;
  rotate?: any;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
  description?: string;
  props?: ParallaxProps;
};

const ScrollCard: React.FC<ScrollCardProps> = ({
  img_source,
  translateX,
  translateY,
  rotate = [0, 0],
  style = {},
  onClick = () => {},
  title = "Project Title",
  description = "Short project description goes here.",
  props = undefined,
}) => {
  return (
    <Parallax
      {...props}
      translateX={translateX}
      rotate={rotate}
      translateY={translateY}
    >
      <div
        onClick={onClick}
        style={{ ...style, overflow: "hidden" }}
        className="relative cursor-pointer group"
      >
        {/* Project Image */}
        <img
          alt="project-card"
          src={img_source}
          className="shadow-lg w-48 md:w-96 lg:w-96"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 border-2 border-black hover:border-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-4  w-48 md:w-96 lg:w-96">
          <div className="text-white">
            <h2 className="text-md md:text-lg font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default React.memo(ScrollCard);
