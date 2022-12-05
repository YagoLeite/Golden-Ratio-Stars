import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Home.module.css";

const SingleLetter = ({ letter, size }) => {
  const controls = useAnimation();
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  const bump = {
    visible: {
      y: ["0px", "-8px", "4px", "0px"],
      scale: [1, 1.2, 1.1, 1],
      transition: { duration: 0.5, type: "spring" },
    },
  };
  return (
    <Text
      className={styles.unselectable}
      as={motion.div}
      color="red.500"
      cursor="none"
      fontSize={size}
      //   fontSize={["25px", "35px", "45px"]}
      // variants={bump}
      animate={controls}
      onHoverStart={() => {
        if (!isAnimationPlaying) {
          setIsAnimationPlaying(true);
          controls.start(bump.visible);
        }
      }}
      onAnimationComplete={() => setIsAnimationPlaying(false)}
    >
      {letter}
    </Text>
  );
};

export default SingleLetter;
