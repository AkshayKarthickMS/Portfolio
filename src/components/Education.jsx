import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, degree, school, date, detail }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-tertiary p-6 rounded-2xl w-full sm:w-[360px] flex flex-col gap-2"
  >
    <p className="text-secondary text-[13px] uppercase tracking-wider">
      {date}
    </p>
    <h3 className="text-white text-[20px] font-bold leading-snug">
      {degree}
    </h3>
    <p className="text-secondary text-[14px]">{school}</p>
    {detail && (
      <p className="mt-2 text-[14px] font-semibold blue-text-gradient w-fit">
        {detail}
      </p>
    )}
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic background</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-14 flex flex-wrap gap-7">
        {education.map((item, index) => (
          <EducationCard key={item.degree} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
