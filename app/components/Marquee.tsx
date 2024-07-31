import React from "react";

type MarqueeProps = {
  textes: string[];
};

const Marquee = ({ textes }: MarqueeProps) => {
  return (
    <div className=" mb-2 p-2 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {textes.map((text, index) => (
          <React.Fragment key={index}>
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-stroke hover-fill">
              {text}
            </span>
            {index < textes.length && (
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
              <span className="mx-2 sm:mx-3 md:mx-4 filled-text text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-green">
                *
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
