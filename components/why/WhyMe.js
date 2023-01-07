import { Flex } from "@chakra-ui/react";
import React from "react";
import WavyText from "../WavyText";
import ReasonOne from "./ReasonOne";
import Spline from "@splinetool/react-spline";
import ReasonThree from "./ReasonThree";
import ReasonFour from "./ReasonFour";

const WhyMe = () => {
  return (
    <Flex direction="column" w="100%" gap="30px">
      <Flex w="100%" h="fit-content" justify="center" align="center">
        <WavyText text="WHY ME" delayDuration={0.4} size="70px" />
      </Flex>

      <Flex w="100%" gap="10px" direction={["column", "column", "row", "row"]}>
        <Flex w="100%" h="100vh" justify="center" align="top">
          <ReasonOne />
        </Flex>
        <Flex w="100%" h="100vh" justify="center" align="center">
          <Spline
            style={{ height: "100%", width: "100%" }}
            scene="https://prod.spline.design/nX9wu06fbT7YBvg2/scene.splinecode"
          />
        </Flex>
      </Flex>

      <Flex w="100%" gap="10px" direction={["column", "column", "row", "row"]}>
        <Flex w="100%" h="100vh" justify="center" align="top">
          <ReasonThree />
        </Flex>
        <Flex w="100%" h="100vh" justify="center" align="top">
          <ReasonFour />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WhyMe;
