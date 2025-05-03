import React from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { LinkPreview } from "./LinkPreview";

export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      id="about"
      ref={ref}
      className="relative h-full max-w-[900px] self-center gap-2 px-15 py-38 max-md:py-22 rounded-t-[10rem] max-md:rounded-t-[10rem] max-sm:rounded-t-[5rem]  max-md:px-15 max-sm:px-8 flex flex-col items-start justify-start max-md:w-full"
      style={{
        background: "linear-gradient(0deg, #fffdf7, #d4d4d485)",
        transformOrigin: "center",
      }}
      animate={isInView ? { y: 1, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
    >
      <motion.p
        className="text-7xl text-[#eb2123] rounded-full pb-5"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ✽
      </motion.p>

      <motion.p
        className="text-5xl  max-md:text-3xl max-sm:text-xl font-normal text-start border-t-6 border-[#fffdf7] pt-10 text-[#252627e0] "
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        I am{" "}
        <LinkPreview
          url="https://www.linkedin.com/in/pedrosamuelsimao/"
          imageSrc="/profile_img.jpg"
          isStatic
          className="font-bold italic"
        >
          Pedro Samuel
        </LinkPreview>
        , a passionate developer with a love for creating innovative solutions.
        I enjoy working with modern technologies and continuously learning to
        improve my skills. My goal is to build applications that make a
        difference in people's lives.
      </motion.p>

      <motion.p
        className="text-5xl  max-md:text-3xl max-sm:text-xl  font-normal text-start border-[#fffdf7] pt-20 max-md:pt-10 text-[#252627e0]"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        At the moment, I am working at{" "}
        <LinkPreview
          url="https://www.linkedin.com/company/gravtacreative/posts/?feedView=all"
          imageSrc="https://media.licdn.com/dms/image/v2/D560BAQETU9PeV8P3tQ/company-logo_200_200/B56ZYW1HMPGcAI-/0/1744139744313/gravtacreative_logo?e=1751500800&v=beta&t=nLe9ErhvktDz4_benVNZ7JEzQZjPqEpnga-ZfR4cpaA"
          isStatic
          className="font-bold italic"
        >
          Gravta
        </LinkPreview>{" "}
        and have achieved many milestones throughout my journey.
      </motion.p>

      <motion.p
        className="text-5xl  max-md:text-3xl max-sm:text-xl  font-normal text-start border-[#fffdf7] pt-20 max-md:pt-10 text-[#252627e0]"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
      >
        My favorite series is{" "}
        <LinkPreview
          url="https://www.imdb.com/title/tt0386676/"
          imageSrc="https://m.media-amazon.com/images/M/MV5BMTUyNzE0OTU0MV5BMl5BanBnXkFtZTgwNzEzMjk4MzI@._V1_QL75_UX338_.jpg"
          isStatic
          className="font-bold italic"
        >
          The Office
        </LinkPreview>
      </motion.p>
    </motion.div>
  );
}
