import { Flex, Text } from "@chakra-ui/react";
import { Html } from "@react-three/drei";
import React, { useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import { motion } from "framer-motion";

const ballVariant = {
  visible: {
    y: ["0px", "35px"],
    opacity: [1, 0],
    transition: { duration: 2, repeat: Infinity },
  },
};

const GoldenHTML = () => {
  return (
    <Html fullscreen>
      <Flex direction="column" w="100%" h="100%" pt={["40px"]} pb="40px">
        <Flex w="100%" justify="center" align="center">
          <Text className={styles.borderOnly}>When Maths meets JavaScript</Text>
        </Flex>
        <Flex w="100%" justify="center" align="center" mt="auto">
          <Flex
            direction="column"
            color="white"
            align="center"
            justify="center"
          >
            <Flex
              justify="center"
              align="center"
              as={motion.div}
              whileHover={{ scale: 1.1 }}
            >
              <Flex
                align="top"
                justify="center"
                pt="13px"
                w="40px"
                h="70px"
                borderRadius="25px"
                borderColor="rgba(162, 10, 176, 0.867)"
                borderWidth="1px"
              >
                <Flex
                  as={motion.div}
                  variants={ballVariant}
                  animate="visible"
                  w="5px"
                  h="5px"
                  borderRadius="50%"
                  bg="rgba(162, 10, 176, 0.867)"
                />
              </Flex>
              <Text
                h="fit-content"
                w="fit-content"
                textAlign={"end"}
                letterSpacing={1.2}
                className={styles.rotateRight}
                opacity={0.8}
                pt="15px"
              >
                Scroll
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Html>
  );
};

export default GoldenHTML;
