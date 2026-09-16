import React from "react";
import { motion } from "framer-motion";

import SectionGlow from "./SectionGlow";
import { styles } from "../styles";
import { collaborations } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CollaborationCard = ({ index, item }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-tertiary rounded-2xl p-6 w-full flex flex-col border border-white/5"
  >
    <div className="flex items-center gap-3">
      <img
        src={item.icon}
        alt={item.company_name}
        className="w-12 h-12 rounded-full flex-shrink-0"
        loading="lazy"
        decoding="async"
      />
      <div>
        <h3 className="text-white text-[19px] font-bold leading-snug">
          {item.title}
        </h3>
        <p className="text-secondary text-[14px] font-semibold">
          {item.company_name}
        </p>
      </div>
    </div>

    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]">
      <span className="text-[#804dee] font-medium flex items-center gap-1">
        <span aria-hidden>📍</span> {item.location}
      </span>
      <span className="text-secondary">{item.date}</span>
    </div>

    <ul className="mt-4 list-disc ml-5 space-y-2">
      {item.points.map((point, i) => (
        <li key={i} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>

    {item.certificateFile && (
      <a
        href={item.certificateFile}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block text-[13px] font-medium text-[#00cea8] hover:underline w-fit"
      >
        📜 View Certificate ↗
      </a>
    )}
  </motion.div>
);

const Collaborations = () => {
  return (
    <>
      <SectionGlow colors={["#2f80ed", "#00cea8"]} side="right" />

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Beyond the classroom</p>
        <h2 className={styles.sectionHeadText}>Academic Collaborations</h2>
      </motion.div>
      <p className="mt-4 text-secondary text-[15px] max-w-3xl">
        Project collaborations completed as part of my academic curriculum at
        Coimbatore Institute of Technology — recognized with certificates of
        appreciation, not formal employment.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-7">
        {collaborations.map((item, index) => (
          <CollaborationCard key={item.title} index={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Collaborations, "collaborations");
