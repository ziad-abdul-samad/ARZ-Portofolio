import { Box, Flex, Image, Text } from "@chakra-ui/react";

const OfferCard02 = () => {
  return (
    <Box
      position="relative"
      borderRadius="20px"
      overflow="hidden"
      height={{ lg: "500px" }}
      width="100%"
    >
      {/* Shared background image */}
      <Image
        src="/image/offer-card-image02.png"
        alt="Background"
        objectFit="cover"
        width="50%"
        height="100%"
        position="absolute"
        top="0"
        right="0"
        zIndex="0"
      />

      {/* Blurred overlay only on left side */}
      <Box
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width={{ base: "100%", lg: "60%" }}
        backdropFilter="blur(16px)"
        background="rgba(0, 0, 0, 0.4)"
        zIndex="1"
      />

      {/* Foreground content on top */}
      <Flex
        position="relative"
        zIndex="2"
        height="100%"
        width="100%"
        align="center"
        justify="space-between"
        px={{ base: "20px", lg: "40px" }}
      >
        {/* Left Content */}
        <Box width={{ base: "100%", lg: "60%" }}>
          <Text
            fontWeight={700}
            fontSize={{ lg: "56px", base: "36px" }}
            color={"white"}
          >
            Strategic Digital Growth
          </Text>

          <Text
            color="white"
            fontWeight={300}
            fontSize={{ lg: "20px", base: "16px" }}
            mt="10px"
          >
            We build momentum. Our strategic approach ensures your brand grows
            with purpose, power, and precision across every digital touchpoint.{" "}
          </Text>

          <Flex flexDirection="column" py="30px" gap="20px" alignItems={"start"}>
            <Flex alignItems="center" gap="10px">
              <Image src="/svg/About/cross-icon-about.svg" alt="icon" />
              <Text color="white" fontWeight={400} fontSize={{ lg: "15px" }}>
                Cross-Platform Optimization
              </Text>
            </Flex>
            <Flex alignItems="center" gap="10px">
              <Image src="/svg/About/market-icon-about.svg" alt="icon" />
              <Text color="white" fontWeight={400} fontSize={{ lg: "15px" }}>
                Market Understanding
              </Text>
            </Flex>
            <Flex alignItems="center" gap="14px" pl={"2px"}>
              <Image src="/svg/About/creative-icon-about.svg" alt="icon" />
              <Text color="white" fontWeight={400} fontSize={{ lg: "15px" }}>
                Creative Problem Solving
              </Text>
            </Flex>
          </Flex>
        </Box>

        {/* Right side (clean image visible) */}
        <Box display={{ base: "none", lg: "block" }} width="40%" />
      </Flex>
    </Box>
  );
};

export default OfferCard02;
