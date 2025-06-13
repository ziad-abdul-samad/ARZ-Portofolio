import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const TechnologiesSection = () => {
  return (
    <Box
      bg="black"
      bgImage="url('image/technologies-bg.png')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      px="70px"
      py="50px"
      position="relative"
      h={"655px"}
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap="45px"
      >
        <Heading fontSize="57px" fontWeight={700} color="white">
          Technologies we use
        </Heading>
        <Text
          maxW="818px"
          fontSize="22px"
          fontWeight={300}
          color="white"
          textAlign="center"
        >
          we harness the power of innovation to deliver{" "}
          <Text as="span" fontWeight={700}>
            efficient <br /> solutions{" "}
          </Text>
          tailored to your needs.
        </Text>
        <Image mt={"143px"} src="svg/Process/technologies-icons.svg"/>
      </Flex>
    </Box>
  );
};

export default TechnologiesSection;
