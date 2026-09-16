import React from "react";
import { motion } from "framer-motion";

import Tilt from "./Tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full' options={{ max: 45, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          loading='lazy'
          decoding='async'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an AI/ML and Data Engineer with hands-on internship experience across
        software development, machine learning, deep learning, and data analytics —
        building GenAI, RAG, computer vision, and automation systems used in production
        procurement, manufacturing, healthcare, and cloud cost-analytics workflows at
        Caterpillar, Orane Healthcare (iCliniq), and Dsignz Media. I've shipped ML models,
        LLM-based assistants, and BI dashboards that cut manual reporting effort by up to
        90%, improved prediction accuracy by 20+ points, and increased cost-allocation
        accuracy by 30%. Let's build something that solves a real problem.
      </motion.p>

      <div className='mt-10'>
        <a href='/resume/Akshay_Karthick_MS_Resume.docx' download>
          <button
            type='button'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
            Download Resume
          </button>
        </a>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
