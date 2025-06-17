import { Flex, Text } from "@chakra-ui/react";

const HeadingTitle = () => {
  return (
    <>
      <Flex flexDir={"column"} color={"white"} bg={"#0B0B0B"} alignItems={"flex-start"} px={{base:"30px",md:"70px"}} py={"50px"}>
      <Text as={"h1"} fontSize={{ base:"24px", lg: "60px" }} fontWeight={700}>
        What we offer?
      </Text>
      <Text fontSize={{ base:"12px",lg: "22px" }} fontWeight={300}>
        Ultimate solution, ensured value, guaranteed growth
      </Text>
      </Flex>
    </>
  );
};

export default HeadingTitle;
