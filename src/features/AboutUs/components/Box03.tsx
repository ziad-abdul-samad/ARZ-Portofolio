import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Box03 = () => {
  return (
    <>
      <Flex
        flexDir={"column"}
        py={"50px"}
        maxW={"400px"}
        alignItems={"flex-start"}
        gap={"10px"}
        bg={"#19191861"}
        borderRadius={"20px"}
        backdropFilter="blur(16px)"
        position={"relative"}
        zIndex={2}
        h={"350px"}
      >
        <Box
          position={"absolute"}
          bottom={"0px"}
          bg={"#"}
          zIndex={-2}
          width="100%"
          height="30%"
          borderRadius={"20px"}
        ></Box>
        <Image
          src="svg/About/strategy-image-about.svg"
          maxW={"90px"}
          ml={"20px"}
        ></Image>
        <Text
          fontSize={{ lg: "20px" }}
          fontWeight={500}
          color={"#F2F2F2"}
          px={"20px"}
        >
          Strategy-Led Execution
        </Text>
        <Text
          fontSize={{ lg: "16px" }}
          fontWeight={300}
          color={"#F2F2F2"}
          px={"20px"}
        >
          We begin every project with a deep understanding of your goals —
          ensuring everything we build drives your bottom line.
        </Text>
      </Flex>
    </>
  );
};

export default Box03;
