import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const OfferCard02 = () => {
  // Animation variants (same as OfferCard01)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const leftSideVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };

  const rightSideVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      position="relative"
      borderRadius="20px"
      overflow="hidden"
      height={{ lg: "500px" }}
      width="100%"
    >
      {/* Right side image - animated from right */}
      <MotionImage
        variants={rightSideVariants}
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

      {/* Blur overlay - animated from left */}
      <MotionBox
        variants={leftSideVariants}
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width={{ base: "100%", lg: "60%" }}
        backdropFilter="blur(16px)"
        background="rgba(0, 0, 0, 0.4)"
        zIndex="1"
      />

      {/* Foreground content */}
      <MotionFlex
        variants={containerVariants}
        position="relative"
        zIndex="2"
        height="100%"
        width="100%"
        align="center"
        justify="space-between"
        px={{ base: "20px", lg: "40px" }}
      >
        {/* Left Content - animated from left */}
        <MotionBox
          variants={leftSideVariants}
          width={{ base: "100%", lg: "60%" }}
        >
          <MotionBox
            variants={itemVariants}
            fontWeight={700}
            fontSize={{ lg: "56px", base: "36px" }}
            color={"white"}
            as="div"
          >
            Strategic Digital Growth
          </MotionBox>

          <MotionBox
            variants={itemVariants}
            color="white"
            fontWeight={300}
            fontSize={{ lg: "20px", base: "16px" }}
            mt="10px"
            as="div"
          >
            We build momentum. Our strategic approach ensures your brand grows
            with purpose, power, and precision across every digital touchpoint.
          </MotionBox>

          <MotionFlex
            variants={containerVariants}
            flexDirection="column"
            py="30px"
            gap="20px"
            alignItems={"start"}
          >
            <MotionFlex variants={itemVariants} alignItems="center" gap="10px">
              <Image src="/svg/About/cross-icon-about.svg" alt="icon" />
              <Text color="white" fontWeight={400} fontSize={{ lg: "15px" }}>
                Cross-Platform Optimization
              </Text>
            </MotionFlex>
            <MotionFlex variants={itemVariants} alignItems="center" gap="10px">
              <Image src="/svg/About/market-icon-about.svg" alt="icon" />
              <Text color="white" fontWeight={400} fontSize={{ lg: "15px" }}>
                Market Understanding
              </Text>
            </MotionFlex>
            <MotionFlex
              variants={itemVariants}
              alignItems="center"
              gap="14px"
              pl={"2px"}
            >
              <Image src="/svg/About/creative-icon-about.svg" alt="icon" />
              <Text color="white" fontWeight={400} fontSize={{ lg: "15px" }}>
                Creative Problem Solving
              </Text>
            </MotionFlex>
          </MotionFlex>
        </MotionBox>

        {/* Right side (clean image visible) */}
        <Box display={{ base: "none", lg: "block" }} width="40%" />
      </MotionFlex>
    </MotionBox>
  );
};

export default OfferCard02;