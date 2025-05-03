import React from "react";
import { motion } from "framer-motion";
import { SpinningText } from "./SpinningText";

export default function Footer() {
  const scrollToTop = () => {
    console.log("scrolling to top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <motion.div className="flex flex-col items-center justify-center h-screen w-full self-center gap-2 relative">
      <SpinningText
        items={[
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/pedrosamuelsimao/",
          },
          { label: "GitHub", href: "https://github.com/PsSave" },
          {
            label: "Instagram",
            href: "https://www.instagram.com/0000001save/",
          },
          { label: "Email", href: "mailto:pedrosviki1265@gmail.com" },
        ]}
      />{" "}
      <motion.img
        src="./Logo.png"
        alt="logo"
        className="absolute w-30 h-30 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
      />
    </motion.div>
  );
}
