import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Box01 = () => {
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
      >
        <Box
          position={"absolute"}
          bottom={"0px"}
          bg={"#629015"}
          zIndex={-2}
          width="100%"
          height="30%"
          borderRadius={"20px"}
        ></Box>
        <Image src="svg/About/scale-image-about.svg" maxW={"90px"} ml={"20px"}></Image>
        <Text fontSize={{ lg: "20px" }} fontWeight={500} color={"#F2F2F2"} px={"20px"}>
          Engineering for Scale
        </Text>
        <Text fontSize={{ lg: "16px" }} fontWeight={300} color={"#F2F2F2"} px={"20px"}>
          Our codebase isn’t just fast — it’s built to adapt, grow, and support
          your business long-term
        </Text>
      </Flex>
    </>
  );
};

export default Box01;
