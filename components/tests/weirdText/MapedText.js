import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const MapedText = ({ string, query }) => {
  const controls = useAnimation();
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const parser = string.split(" ").filter((word) => word !== "");
  return (
    <Flex wrap={"wrap"} w="100%" h="100%" gap="5px" cursor="default">
      {parser.map((word, index) => {
        const test = query.filter((obj) => obj.word === word);
        if (test.length > 0) {
          return (
            <Text
              as={motion.div}
              //   onHoverStart={() => console.log(word)}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="21px"
              key={index}
              //   variants={query.variant}
              // animate={controls}
              // onHoverStart={() => {
              //   if (!isAnimationPlaying) {
              //     setIsAnimationPlaying(true);

              //     controls.start(test[0].variant.visible);
              //   }
              // }}
              // onAnimationComplete={() => setIsAnimationPlaying(false)}
            >
              {word}
            </Text>
          );
        } else {
          return (
            <Text fontSize="21px" key={index}>
              {word}
            </Text>
          );
        }
      })}
    </Flex>
  );
};

function AnimatedLetter() {}

export default MapedText;
