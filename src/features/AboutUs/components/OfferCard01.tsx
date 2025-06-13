import { Box, Flex, Image, Text } from "@chakra-ui/react";

const OfferCard01 = () => {
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
        src="/image/offer-card-image.png"
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
            Tailored Software Solutions
          </Text>

          <Text color="white" fontWeight={300} fontSize={{ lg: "20px", base: "16px" }} mt="10px">
            We don’t just build — we craft customized solutions that fit your unique vision, goals, and market needs
          </Text>

          <Flex flexDirection="column" py="30px" gap="20px">
            <Flex alignItems="center" gap="10px">
              <Image src="/svg/About/vision-icon-about.svg" alt="icon" />
              <Text color="white" fontWeight={400} fontSize={{ lg: "15px" }}>
                Custom-Built for Your Vision
              </Text>
            </Flex>
            <Flex alignItems="center" gap="10px">
              <Image src="/svg/About/scalable-icon-about.svg" alt="icon" />
              <Text color="white" fontWeight={400} fontSize={{ lg: "15px" }}>
                Scalable & Flexible Architecture
              </Text>
            </Flex>
            <Flex alignItems="center" gap="10px">
              <Image src="/svg/About/capabilities-icon-about.svg" alt="icon" />
              <Text color="white" fontWeight={400} fontSize={{ lg: "15px" }}>
                Seamless Integration Capabilities
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

export default OfferCard01;
