import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SingleLetter from "./tests/SingleLetter";
import { useInView } from "react-intersection-observer";

const WavyText = ({ text, delayDuration, size }) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delayDuration },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: -40,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
  };

  const bump = {
    visible: {
      y: ["0px", "-8px", "4px", "0px"],
      scale: [1, 1.2, 1.1, 1],
      transition: { duration: 0.4, type: "spring" },
    },
  };
  return (
    <Flex
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView && "visible"}
      justify="left"
      overflow="hidden"
      as={motion.div}
    >
      {text.split("").map((letter, index) => {
        return (
          <Flex as={motion.div} variants={child} key={index}>
            {letter === " " ? (
              <Text opacity={0}>aa</Text>
            ) : (
              <SingleLetter size={size} letter={letter} />
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default WavyText;
