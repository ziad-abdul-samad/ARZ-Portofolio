import { Flex, Heading, Image, Text, Box, Button } from "@chakra-ui/react";

const HomeSection01 = () => {
  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      {/* Background Image */}
      <Image
        src="image/home-bg.png"
        alt="Background"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        objectPosition="center"
        zIndex="-1"
      />

      {/* Content Section */}
      <Flex
        px="70px"
        color="white"
        justify="space-between"
        alignItems="center"
        position="relative"
        height="100%"
      >
        <Flex flexDir="column" gap="30px">
          <Heading
            fontSize={{ lg: "65px" }}
            fontWeight={900}
            lineHeight="100%"
            color="#F2F2F2"
          >
            Dominating the digital jungle
          </Heading>
          <Text fontSize={{ lg: "31px" }} fontWeight={700} color="#FEFEFE">
            Software & Marketing Solutions Engineered for Your Success
          </Text>
          <Text fontSize={{ lg: "20px" }} fontWeight={300} color="#FEFEFE">
            We create marketing, branding, and software solutions that help
            businesses build their brands.
          </Text>
          <Flex gap={"43px"} alignItems={"center"}>
            <Button
              fontSize={"13px"}
              fontWeight={700}
              color={"white"}
              px="25px"
              py="10px"
              borderBottom={"solid 5px #4C4C4C"}
              borderRadius={"8px"}
              bg={"#2E2E2E"}
            >
              View Portfolio
            </Button>{" "}
            <Button
              borderBottom="8px solid #6C9B23"
              bg="#9BFF00"
              color="black"
              borderRadius="11px"
              px="25px"
              py="10px"
              fontSize="13px"
              fontWeight={700}
            >
              Hire us
            </Button>{" "}
          </Flex>
          <Flex
            justifyContent="flex-start"
            alignItems="center"
            gap="20px"
            py="50px"
          >
            <Flex flexDir="column">
              <Text fontSize={{ lg: "29px" }} fontWeight={500}>
                10+
              </Text>
              <Flex justifyContent="flex-start" alignItems="center" gap="5px">
                <Image src="/svg/Home/exp-icon-home.svg" alt="icon" />
                <Text fontSize={{ lg: "12px" }} fontWeight={400}>
                  Team Experience Years
                </Text>
              </Flex>
            </Flex>
            <Flex flexDir="column">
              <Text fontSize={{ lg: "29px" }} fontWeight={500}>
                12+
              </Text>
              <Flex justifyContent="flex-start" alignItems="center" gap="5px">
                <Image src="/svg/Home/digital-icon-home.svg" alt="icon" />
                <Text fontSize={{ lg: "12px" }} fontWeight={400}>
                  Digital Services
                </Text>
              </Flex>
            </Flex>
            <Flex flexDir="column">
              <Text fontSize={{ lg: "29px" }} fontWeight={500}>
                20+
              </Text>
              <Flex justifyContent="flex-start" alignItems="center" gap="5px">
                <Image src="/svg/Home/rocket-icon-home.svg" alt="icon" />
                <Text fontSize={{ lg: "12px" }} fontWeight={400}>
                  Successful Projects
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src="/svg/Home/home-logo.svg"
          alt="home-logo"
          maxW="420px"
          objectFit="contain"
        />
      </Flex>
    </Box>
  );
};

export default HomeSection01;
