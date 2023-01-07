import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { Flex } from "@chakra-ui/react";

const ReasonThree = () => {
  const test = useRef();
  function onLoad(spline) {
    const obj = spline.findObjectByName("Text");
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    test.current = obj;
  }

  function onMouseDown(e) {
    if (e.target.name === "Text") {
      console.log("I have been clicked!");
    }
    console.log(e);
  }

  return (
    <Flex w="100%" h="100%" bg="blue">
      <Spline
        style={{ height: "100%", width: "100%" }}
        scene="https://prod.spline.design/cNsHvrXtP9xiBL-O/scene.splinecode"
        onLoad={onLoad}
        onMouseDown={onMouseDown}
      />
    </Flex>
  );
};

export default ReasonThree;
