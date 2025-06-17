import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Box02 = () => {
  return (
    <>
      <Flex
        flexDir={"column"}
        py={"50px"}
        maxW={"400px"}
        alignItems={{ base: "center", md: "flex-start" }}
        gap={"10px"}
        bg={"#19191861"}
        borderRadius={"20px"}
        backdropFilter="blur(16px)"
        position={"relative"}
        zIndex={2}
        h={{ base: "fit", md: "350px" }}
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
          src="svg/About/creative-image-about.svg"
          maxW={{ base: "46px", md: "90px" }}
          ml={{base:"none",md:"20px"}}
        ></Image>
        <Text
          fontSize={{ base: "12px", lg: "20px" }}
          fontWeight={500}
          color={"#F2F2F2"}
          px={"20px"}
        >
          Creative Meets Technical
        </Text>
        <Text
          textAlign={{ base: "center", md: "left" }}
          fontSize={{ base: "10px", lg: "16px" }}
          fontWeight={300}
          color={"#F2F2F2"}
          px={"20px"}
        >
          We’re not just developers or marketers — we’re a hybrid team that
          builds systems and tells stories.
        </Text>
      </Flex>
    </>
  );
};

export default Box02;
