import { useRef } from "react";

// Lightweight replacement for react-tilt (unmaintained, React 15/16 peer dep
// that conflicts with React 18). Same visual tilt-on-hover effect, no dependency.
const Tilt = ({ children, className = "", options = {} }) => {
  const ref = useRef(null);
  const max = options.max ?? 25;
  const scale = options.scale ?? 1;
  const speed = options.speed ?? 400;

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-py * max).toFixed(
      2
    )}deg) rotateY(${(px * max).toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transition: `transform ${speed}ms cubic-bezier(.03,.98,.52,.99)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default Tilt;
