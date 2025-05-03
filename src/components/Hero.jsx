import React from "react";
import LetterSwapForward from "./LetterSwapForward";
import { motion } from "framer-motion";

export default function Hero() {
  const [wordIndex, setWordIndex] = React.useState(0);
  const words = ["passionate", "creative", "dedicated", "innovative"];

  const positions = ["center", "center", "center"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-start justify-center h-[calc(100vh-30vh)] max-w-[900px] w-full self-center gap-2 relative rounded-b-[10rem] max-md:w-full max-md:rounded-b-[10rem] max-sm:rounded-b-[5rem] px-15 max-md:px-15 max-sm:px-8"
      style={{
        background: "linear-gradient(180deg, #fffdf7, #d4d4d485)",
      }}
      initial={{ y: -800, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
    >
      <motion.img
        src="./Logo.png"
        alt="logo"
        className="absolute top-5 left-10 w-20 h-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
      />
      <motion.div
        className="flex flex-col items-center justify-center gap-2 w-full relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
      >
        {["Welcome", "To My", "Portfolio"].map((label, idx) => (
          <motion.div
            layout
            style={{ alignSelf: positions[idx] }}
            transition={{
              layout: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.8,
              },
            }}
          >
            <LetterSwapForward
              label={label}
              reverse={true}
              className={`
                italic cursor-pointer select-none px-2  
                ${
                  idx === 0
                    ? "text-[6rem] max-md:text-[5rem] max-sm:text-[3rem] leading-20 max-sm:leading-10 text-[#252627]"
                    : ""
                }
                ${
                  idx === 1
                    ? "text-[5rem] max-md:text-[4rem] max-sm:text-[2.5rem] leading-22 max-sm:leading-11 text-[#252627]"
                    : ""
                }
                ${
                  idx === 2
                    ? "text-[10rem] max-md:text-[9rem] max-sm:text-[5rem] leading-35 max-sm:leading-17 text-[#3c8875]"
                    : ""
                }
              `}
            />
          </motion.div>
        ))}
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f636_200d_1f32b_fe0f/512.gif"
          alt="😶"
          className="absolute top-10 right-5 rotate-10 w-20 h-20 max-sm:w-15 max-sm:h-15 object-cover"
        />
      </motion.div>
      {/* <motion.ul
        className="flex flex-row items-center justify-center max-sm:justify-center w-full gap-2 text-2xl max-sm:text-lg text-[#252627e0] px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <li>
          <a href="#about">
            <LetterSwapForward
              label="{about}"
              reverse={false}
              staggerFrom={"center"}
              className="font-normal cursor-pointer px-2 hover:text-[#eb2123] transition-colors duration-300"
            />
          </a>
        </li>
        <li>
          <LetterSwapForward
            label="{works}"
            reverse={false}
            staggerFrom={"center"}
            className="font-normal cursor-pointer px-2 hover:text-[#eb2123] transition-colors duration-300"
          />
        </li>
        <li>
          <a href="#contact">
            <LetterSwapForward
              label="{contact}"
              reverse={false}
              staggerFrom={"center"}
              className="font-normal cursor-pointer px-2 hover:text-[#eb2123] transition-colors duration-300"
            />
          </a>
        </li>
      </motion.ul> */}
      <motion.span className="w-44 h-2 bg-[#fffdf7] absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full mb-4 z-0 cursor-pointer">
        {/* <motion.img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f423/512.gif"
          alt="🐣"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 object-cover select-none"
          style={{ transform: "translateY(-7%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1 }}
        /> */}
      </motion.span>
    </motion.div>
  );
}
