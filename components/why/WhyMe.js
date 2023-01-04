import { Flex } from "@chakra-ui/react";
import React from "react";
import WavyText from "../WavyText";
import ReasonOne from "./ReasonOne";

const WhyMe = () => {
  return (
    <Flex direction="column" w="100%" gap="30px">
      <Flex w="100%" h="fit-content" justify="center" align="center">
        <WavyText text="WHY ME" delayDuration={0.4} size="70px" />
      </Flex>
      <Flex w="100%" gap="10px">
        <Flex w="100%" h="100vh" justify="center" align="top">
          <ReasonOne />
        </Flex>
        <Flex w="100%" h="100vh" bg="red"></Flex>
      </Flex>
    </Flex>
  );
};

export default WhyMe;
