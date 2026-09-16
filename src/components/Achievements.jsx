import React from "react";
import { motion } from "framer-motion";

import SectionGlow from "./SectionGlow";
import { styles } from "../styles";
import { certifications, achievements, codingProfiles } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ index, title, detail, stat, statLabel, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="relative bg-gradient-to-br from-[#3d2f00] via-tertiary to-tertiary p-[1px] rounded-2xl overflow-hidden group"
    style={{
      backgroundImage:
        "linear-gradient(135deg, rgba(242,200,17,0.55), rgba(128,77,238,0.15) 60%)",
    }}
  >
    <div className="bg-black-100 rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F2C811] to-[#a67c00] flex items-center justify-center text-[26px] shadow-[0_0_25px_rgba(242,200,17,0.35)]">
          {icon}
        </div>
        {stat && (
          <div className="text-right">
            <p className="text-[26px] font-black text-[#F2C811] leading-none">{stat}</p>
            {statLabel && (
              <p className="text-[11px] text-secondary uppercase tracking-wider mt-1">
                {statLabel}
              </p>
            )}
          </div>
        )}
      </div>
      <h4 className="mt-4 text-white text-[17px] font-semibold">{title}</h4>
      <p className="mt-2 text-secondary text-[14px] leading-[24px]">{detail}</p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <>
      <SectionGlow colors={["#F2C811", "#f272c8"]} side="right" />

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognition & proof of work</p>
        <h2 className={styles.sectionHeadText}>Achievements & Certifications</h2>
      </motion.div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <AchievementCard key={item.title} index={index} {...item} />
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">
        <motion.div variants={fadeIn("right", "spring", 0.1, 0.75)}>
          <h3 className="text-white text-[22px] font-bold mb-5 flex items-center gap-2">
            <span aria-hidden>🎓</span> Certifications
          </h3>
          <div className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary hover:bg-black-100 transition-colors p-5 rounded-2xl border-l-4 border-[#00cea8] flex items-start gap-3"
              >
                <span className="text-[20px]" aria-hidden>📜</span>
                <div className="flex-1">
                  <h4 className="text-white text-[16px] font-semibold">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-secondary text-[13px]">
                    {cert.issuer}
                    {cert.detail ? ` · ${cert.detail}` : ""}
                  </p>
                </div>
                <span className="text-secondary text-[12px] flex-shrink-0">View ↗</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn("left", "spring", 0.1, 0.75)}>
          <h3 className="text-white text-[22px] font-bold mb-5 flex items-center gap-2">
            <span aria-hidden>🔗</span> Coding Profiles
          </h3>
          <div className="flex flex-wrap gap-4">
            {codingProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary hover:bg-black-100 hover:-translate-y-0.5 transition-all py-3 px-6 rounded-xl text-white font-medium text-[14px] shadow-md shadow-primary"
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
