import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import WavyText from "../../WavyText";
import MapedText from "../weirdText/MapedText";

const query = [
  {
    word: "React,",
    variant: {
      visible: {
        y: ["0px", "-8px", "4px", "0px"],
        scale: [1, 1.2, 1.1, 1],
        transition: { duration: 0.5, type: "spring" },
      },
    },
  },
  {
    word: "3D,",
    variant: {
      visible: {
        y: ["0px", "8px", "4px", "0px"],
        scale: [1, 1.2, 1.1, 1],
        transition: { duration: 0.5, type: "spring" },
      },
    },
  },
  {
    word: "animations,",
    variant: {
      visible: {
        rotate: [360, -360],
      },
    },
  },
  {
    word: "JavaScript,",
    variant: {
      visible: {
        x: [-5, 5, 0],
      },
    },
  },
  {
    word: "frontend",
    variant: {
      visible: {
        x: [-5, 5, 0],
      },
    },
  },
];

const AboutMe = () => {
  const breakPointSizes = useBreakpointValue({
    sm: "20px",
    md: "45px",
    lg: "72px",
  });
  return (
    <Flex w="100%" h="100%" direction="column" color="white">
      <WavyText size={breakPointSizes} text="About me" delayDuration={0.3} />
      <MapedText
        string="Hi, my name is Yago and I am a frontend developer with a background in
        mathematics. With a strong foundation in React, 3D, animations, and
        JavaScript, I have been able to contribute to a wide variety of products at my
        current company. In addition to my technical skills, I have excellent
        teamwork and communication skills, which have been invaluable in my
        role as a developer."
        query={query}
      />
    </Flex>
  );
};

export default AboutMe;
