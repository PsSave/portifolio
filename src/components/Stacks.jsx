import React, { useRef } from "react";
// import { motion } from "framer-motion";
import { Slide } from "./Slide";
import { useScroll } from "motion/react";

export default function Stacks() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });
  return (
    <div ref={container} className="h-full py-40">
      <Slide
        src={
          "https://i.pinimg.com/736x/33/45/bf/3345bf4e8cf22a202139eaf4e6c577a7.jpg"
        }
        direction={"left"}
        left={"-63%"}
        text={"Front End Developer"}
        textColor={"#252627"}
        progress={scrollYProgress}
      />

      <Slide
        src={
          "https://i.pinimg.com/736x/33/45/bf/3345bf4e8cf22a202139eaf4e6c577a7.jpg"
        }
        direction={"right"}
        left={"-35%"}
        text={"Back End Developer"}
        textColor={"#eb2123"}
        progress={scrollYProgress}
      />

      <Slide
        src={
          "https://i.pinimg.com/736x/33/45/bf/3345bf4e8cf22a202139eaf4e6c577a7.jpg"
        }
        direction={"left"}
        left={"-75%"}
        text={"Fullstack Developer"}
        textColor={"#3c8875"}
        progress={scrollYProgress}
      />
    </div>
  );
}
