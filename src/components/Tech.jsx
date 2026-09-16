import React from "react";

import { BallCanvas } from "./canvas";
import LazyMount from "./LazyMount";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <LazyMount minHeight='112px'>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </LazyMount>
  );
};

export default SectionWrapper(Tech, "skills");
