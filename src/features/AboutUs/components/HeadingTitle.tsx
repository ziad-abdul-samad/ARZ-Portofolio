import { Flex, Text } from "@chakra-ui/react";

const HeadingTitle = () => {
  return (
    <>
      <Flex flexDir={"column"} color={"white"} bg={"#0B0B0B"} alignItems={"flex-start"} px={"70px"} py={"50px"}>
      <Text as={"h1"} fontSize={{ lg: "60px" }} fontWeight={700}>
        What we offer?
      </Text>
      <Text fontSize={{ lg: "22px" }} fontWeight={300}>
        Ultimate solution, ensured value, guaranteed growth
      </Text>
      </Flex>
    </>
  );
};

export default HeadingTitle;
