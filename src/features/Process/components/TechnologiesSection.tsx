import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const TechnologiesSection = () => {
  return (
    <Box
      bg="black"
      bgImage="url('image/technologies-bg.png')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      px={{base:"30px",md:"70px"}}
      py="50px"
      position="relative"
      h={{md:"655px"}}
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap="45px"
      >
        <Heading fontSize={{base:"21px",md:"57px"}} fontWeight={700} color="white" textAlign={{base:"center" , md:"left"}}>
          Technologies we use
        </Heading>
        <Text
          maxW="818px"
          fontSize={{base:"11px",md:"22px"}}
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
        <Image mt={{base:"0",md:"143px"}} src="svg/Process/technologies-icons.svg"/>
      </Flex>
    </Box>
  );
};

export default TechnologiesSection;
