import React from "react";
import Spline from "@splinetool/react-spline";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flex } from "@chakra-ui/react";

const ReasonFour = () => {
  const { scrollYProgress } = useScroll();
  const yValue = useTransform(scrollYProgress, [0.2, 0.6], [0, 1000]);
  return (
    <Flex as={motion.div} style={{ y: yValue }} h="fit-content">
      <Spline
        style={{ height: "100%", width: "100%" }}
        scene="https://prod.spline.design/BUmqFVGs-GiRZKn3/scene.splinecode"
      />
    </Flex>
  );
};

export default ReasonFour;
