import { useTransform, motion } from "motion/react";

export const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;

  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  console.log(props.src);
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1,
        delay: 1,
      }}
    >
      <Phrase text={props.text} src={props.src} textColor={props.textColor} />
      <Phrase text={props.text} src={props.src} textColor={props.textColor} />
      <Phrase text={props.text} src={props.src} textColor={props.textColor} />
    </motion.div>
  );
};

const Phrase = ({ text, src, textColor }) => {
  return (
    <div className={"px-5 flex gap-5 items-center"}>
      <p className={`text-[7.5vw] text-[${textColor}]`}>{text}</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <img style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
