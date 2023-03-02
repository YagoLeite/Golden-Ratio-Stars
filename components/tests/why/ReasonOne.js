import { Flex, Text } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import styles from "../../styles/Home.module.css";

const ReasonOne = () => {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0.1, 0.2], [0, 100]);
  const x2 = useTransform(scrollYProgress, [0.1, 0.2], [100, 0]);
  const x3 = useTransform(scrollYProgress, [0.1, 0.2], [100, 0]);
  const yValue = useTransform(scrollYProgress, [0.1, 0.3], [0, 800]);
  return (
    <Flex
      as={motion.div}
      style={{ y: yValue }}
      direction="column"
      w="100%"
      maxW={["300px", "320px", "400px", "600px"]}
      gap="10px"
      color="white"
      h="fit-content"
      className={styles.unselectable}
    >
      <Text
        as={motion.div}
        style={{ x: x1 }}
        textAlign="left"
        w="100%"
        fontSize="30px"
      >
        ELEGANT
      </Text>
      <Text
        as={motion.div}
        style={{ x: x2 }}
        textAlign="center"
        w="100%"
        fontSize="30px"
      >
        ANIMATIONS
      </Text>
      <Text
        as={motion.div}
        style={{ x: x3 }}
        textAlign="right"
        w="100%"
        fontSize="30px"
      >
        FOR YOU
      </Text>
    </Flex>
  );
};

export default ReasonOne;
