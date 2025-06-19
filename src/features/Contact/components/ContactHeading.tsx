import { Flex, Heading, Text } from "@chakra-ui/react";

const ContactHeading = () => {
  return (
    <>
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"30px"}
        bg={"#010200"}
        py={"20px"}
      >
        <Heading color={"white"} fontWeight={700} fontSize={{base:"27px",md:"80px"}}>
          Let’s get in touch
        </Heading>
        <Text color={"white"} fontWeight={700} fontSize={{base:"17px",md:"50px"}}>
          Conact us
        </Text>
      </Flex>
    </>
  );
};

export default ContactHeading;
