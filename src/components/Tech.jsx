import React from "react";
import { motion } from "framer-motion";

import { SkillsCanvas } from "./canvas";
import LazyMount from "./LazyMount";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const rows = Math.ceil(
    technologies.length / (technologies.length > 20 ? 7 : technologies.length > 12 ? 6 : 4)
  );
  const height = Math.max(420, 130 * rows);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Tools of the trade</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </motion.div>
      <p className='mt-4 text-secondary text-[15px] text-center max-w-2xl mx-auto'>
        Drag to spin the cluster — every ball is a technology I've shipped production
        code with.
      </p>

      <LazyMount minHeight={`${height}px`}>
        <div style={{ height }} className='w-full'>
          <SkillsCanvas technologies={technologies} />
        </div>
      </LazyMount>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
