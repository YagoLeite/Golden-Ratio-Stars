import { Flex } from "@chakra-ui/react";
import GoldenScene from "../components/Golden/GoldenScene";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.anim_gradient}>
      <Flex
        w="100%"
        maxW="100vw"
        h="1000vh"
        direction="column"
        overflowX="hidden"
      >
        <Flex h="100vh" w="100%">
          <GoldenScene />
        </Flex>
      </Flex>
    </div>
  );
}
