import { Flex, Image, Text } from "@chakra-ui/react";

const HeadingTitle = () => {
  return (
    <>
      <Flex
        flexDir={"column"}
        color={"white"}
        alignItems={"flex-start"}
        px={"70px"}
        py={"50px"}
        bg={"#080808FA"}
        pos={"relative"}
        zIndex={2}
      >
        <Image src="image/service-bg-effect.png" pos={"absolute"} top={"-100px"} left={0} zIndex={-3} />
        <Text as={"h1"} fontSize={{ lg: "60px" }} fontWeight={700}>
          Our Services
        </Text>
        <Text fontSize={{ lg: "22px" }} fontWeight={300}>
          Crafted to transform ambition into digital excellence.{" "}
        </Text>
      </Flex>
    </>
  );
};

export default HeadingTitle;
