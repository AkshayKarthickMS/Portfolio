import React from "react";
import { motion } from "framer-motion";

import SectionGlow from "./SectionGlow";
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, degree, school, date, detail, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-tertiary p-6 rounded-2xl w-full sm:w-[360px] flex flex-col gap-3 border border-white/5 hover:border-[#00cea8]/40 transition-colors"
  >
    <div className="flex items-center gap-3">
      {icon && (
        <img src={icon} alt={school} className="w-10 h-10 rounded-full flex-shrink-0" loading="lazy" decoding="async" />
      )}
      <p className="text-secondary text-[13px] uppercase tracking-wider">
        {date}
      </p>
    </div>
    <h3 className="text-white text-[20px] font-bold leading-snug">
      {degree}
    </h3>
    <p className="text-secondary text-[14px]">{school}</p>
    {detail && (
      <p className="mt-1 text-[14px] font-semibold green-text-gradient w-fit">
        {detail}
      </p>
    )}
  </motion.div>
);

const Education = () => {
  return (
    <>
      <SectionGlow colors={["#00cea8", "#2f80ed"]} side="right" />

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
