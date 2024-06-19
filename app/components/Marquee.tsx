import React from "react";
import { FaAsterisk } from "react-icons/fa";

type MarqueeProps = {
  textes: string[];
};

const Marquee = ({ textes }: MarqueeProps) => {
  return (
    <div className="flex gap-10 pt-20 overflow-hidden whitespace-nowrap h-72">
      <div className="inline-block animate-marquee">
        {textes.map((text, index) => (
          <>
            <span className="text-8xl font-bold text-stroke hover-fill">
              {text}
            </span>
            {index < textes.length - 1 && (
              <span className="mx-4 filled-text text-8xl font-bold text-green">
                *
              </span>
            )}
          </>
        ))}
      </div>
      <div className="inline-block animate-marquee">
        {textes.map((text, index) => (
          <div key={index}>
            <span className="text-8xl font-bold text-stroke hover-fill">
              {text}
            </span>
            {index < textes.length - 1 && (
              <FaAsterisk className="mx-4 filled-text text-8xl font-bold text-green" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
