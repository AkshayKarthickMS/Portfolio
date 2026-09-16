import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const AVATAR_COLORS = ["#804dee", "#00cea8", "#f272c8", "#2f80ed", "#F2C811"];

const initialsOf = (name) =>
  name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const colorFor = (name) => {
  const hash = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
};

const FeedbackCard = ({ index, testimonial, name, designation, company }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.15, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full flex flex-col'
  >
    <p className='text-[#804dee] font-black text-[42px] leading-none'>"</p>

    <p className='mt-1 text-white tracking-wide text-[15px] leading-[24px] flex-1'>
      {testimonial}
    </p>

    <div className='mt-6 flex items-center gap-3'>
      <div
        className='w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-[14px] flex-shrink-0'
        style={{ backgroundColor: colorFor(name) }}
        aria-hidden
      >
        {initialsOf(name)}
      </div>
      <div className='flex-1 flex flex-col'>
        <p className='text-white font-medium text-[15px]'>{name}</p>
        <p className='text-secondary text-[12px]'>
          {designation} · {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  if (testimonials.length === 0) return null;

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
