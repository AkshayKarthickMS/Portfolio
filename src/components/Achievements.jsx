import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certifications, achievements, codingProfiles } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognition & proof of work</p>
        <h2 className={styles.sectionHeadText}>Achievements & Certifications</h2>
      </motion.div>

      <div className="mt-14 grid md:grid-cols-2 gap-7">
        <motion.div variants={fadeIn("right", "spring", 0.1, 0.75)}>
          <h3 className="text-white text-[22px] font-bold mb-5">Achievements</h3>
          <div className="flex flex-col gap-5">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="bg-tertiary p-6 rounded-2xl border-l-4 border-[#804dee]"
              >
                <h4 className="text-white text-[17px] font-semibold">
                  {item.title}
                </h4>
                <p className="mt-2 text-secondary text-[14px] leading-[24px]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn("left", "spring", 0.1, 0.75)}>
          <h3 className="text-white text-[22px] font-bold mb-5">Certifications</h3>
          <div className="flex flex-col gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-tertiary p-6 rounded-2xl border-l-4 border-[#00cea8]"
              >
                <h4 className="text-white text-[17px] font-semibold">
                  {cert.title}
                </h4>
                <p className="mt-1 text-secondary text-[14px]">
                  {cert.issuer}
                  {cert.detail ? ` · ${cert.detail}` : ""}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {codingProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary hover:bg-black-100 transition-colors py-3 px-6 rounded-xl text-white font-medium text-[14px] shadow-md shadow-primary"
              >
                {profile.name} ↗
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
