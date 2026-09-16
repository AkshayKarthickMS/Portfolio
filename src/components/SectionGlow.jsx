import React from "react";

// A soft, blurred color wash placed behind a section's content so each part of
// the page reads as its own moment while scrolling, instead of one flat block.
const SectionGlow = ({ colors = ["#804dee", "#00cea8"], side = "both" }) => (
  <div className='absolute inset-0 -z-10 overflow-hidden pointer-events-none' aria-hidden>
    {(side === "left" || side === "both") && (
      <div
        className='absolute -left-32 top-0 w-[420px] h-[420px] rounded-full blur-[120px] opacity-20'
        style={{ background: colors[0] }}
      />
    )}
    {(side === "right" || side === "both") && (
      <div
        className='absolute -right-32 bottom-0 w-[420px] h-[420px] rounded-full blur-[120px] opacity-[0.15]'
        style={{ background: colors[1] || colors[0] }}
      />
    )}
  </div>
);

export default SectionGlow;
