import React from "react";
import { FaAsterisk } from "react-icons/fa";

type MarqueeProps = {
  textes: string[];
};

const Marquee = ({ textes }: MarqueeProps) => {
  return (
    <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20 overflow-hidden whitespace-nowrap h-40 sm:h-48 md:h-56 lg:h-72">
      <div className="inline-block animate-marquee">
        {textes.map((text, index) => (
          <React.Fragment key={index}>
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-stroke hover-fill">
              {text}
            </span>
            {index < textes.length - 1 && (
              <span className="mx-2 sm:mx-3 md:mx-4 filled-text text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-green">
                *
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="inline-block animate-marquee">
        {textes.map((text, index) => (
          <React.Fragment key={index}>
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-stroke hover-fill">
              {text}
            </span>
            {index < textes.length - 1 && (
              <FaAsterisk className="inline-block mx-2 sm:mx-3 md:mx-4 filled-text text-3xl sm:text-2xl md:text-6xl lg:text-8xl font-bold text-green" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
