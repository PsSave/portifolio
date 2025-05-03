import { motion } from "framer-motion";
import React from "react";

const BASE_TRANSITION = {
  repeat: Infinity,
  ease: "linear",
};

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

export function SpinningText({
  items,
  duration = 10,
  style,
  className,
  reverse = false,
  radius = 10,
  transition,
  variants,
}) {
  if (!Array.isArray(items)) {
    throw new Error("items must be an array");
  }

  if (
    !items.every(
      (item) => typeof item.label === "string" && typeof item.href === "string"
    )
  ) {
    throw new Error("Each item must have a 'label' and 'href' of type string");
  }

  const letters = items
    .map((item) => item.label + " • ")
    .join("")
    .split("");

  // Add trailing space for spacing
  letters.push(" ");

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: transition?.duration ?? duration,
  };

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  // Create a mapping from index to the item link
  let currentIndex = 0;
  const letterLinks = items.flatMap((item) =>
    [...item.label, " ", "•", " "].map(() => ({ href: item.href }))
  );

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ ...style }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition}
    >
      {letters.map((letter, index) => (
        <motion.a
          href={letterLinks[index]?.href || "#"}
          key={`${index}-${letter}`}
          variants={itemVariants}
          className="absolute left-1/2 top-1/2 inline-block text-[#3c8875]"
          style={{
            "--index": index,
            "--total": letters.length,
            "--radius": radius,
            transform: `
            translate(-50%, -50%)
            rotate(calc(360deg / var(--total) * var(--index)))
            translateY(calc(var(--radius, 5) * -1ch))
          `,
            transformOrigin: "center",
            padding: "0.5rem", // aumenta área clicável
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ pointerEvents: "none" }}>{letter}</span>
        </motion.a>
      ))}
      <span className="sr-only">
        {items.map((item) => item.label).join(" • ")}
      </span>
    </motion.div>
  );
}
