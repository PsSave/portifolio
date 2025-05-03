import { useMemo, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ScrollReveal = ({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <motion.span
          className="inline-block"
          key={index}
          initial={{
            opacity: baseOpacity,
            rotate: baseRotation,
            filter: enableBlur ? `blur(${blurStrength}px)` : "none",
          }}
          animate={controls}
          transition={{
            opacity: { duration: 0.5, ease: "easeOut" },
            rotate: { duration: 0.5, ease: "easeOut" },
            filter: { duration: 0.5, ease: "easeOut" },
          }}
        >
          {word}
        </motion.span>
      );
    });
  }, [children, baseOpacity, baseRotation, enableBlur, blurStrength]);

  if (inView) {
    controls.start({
      opacity: 1,
      rotate: 0,
      filter: "blur(0px)",
    });
  }

  return (
    <motion.h2
      ref={ref}
      className={`my-5 ${containerClassName}`}
      initial={{ opacity: baseOpacity, rotate: baseRotation }}
      animate={inView ? { opacity: 1, rotate: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </motion.h2>
  );
};

export default ScrollReveal;
