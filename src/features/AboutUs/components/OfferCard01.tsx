import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const OfferCard01 = () => {
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
      <MotionImage
        variants={rightSideVariants}
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
        <MotionBox
          variants={leftSideVariants}
          py={"50px"}
          width={{ base: "100%", lg: "60%" }}
        >
          <MotionBox
            variants={itemVariants}
            fontWeight={700}
            fontSize={{ lg: "56px", base: "20px" }}
            color={"white"}
            as="div"
          >
            Tailored Software Solutions
          </MotionBox>

          <MotionBox
            variants={itemVariants}
            color="white"
            fontWeight={300}
            fontSize={{ lg: "20px", base: "12px" }}
            mt="10px"
            as="div"
          >
            We don't just build — we craft customized solutions that fit your
            unique vision, goals, and market needs
          </MotionBox>

          <MotionFlex
            variants={containerVariants}
            flexDirection="column"
            py="30px"
            gap="20px"
          >
            <MotionFlex variants={itemVariants} alignItems="center" gap="10px">
              <Image src="/svg/About/vision-icon-about.svg" alt="icon" maxW={{base:"20px"}} />
              <Text color="white" fontWeight={400} fontSize={{ base:"9px",lg: "15px" }}>
                Custom-Built for Your Vision
              </Text>
            </MotionFlex>
            <MotionFlex variants={itemVariants} alignItems="center" gap="10px">
              <Image src="/svg/About/scalable-icon-about.svg" alt="icon" maxW={{base:"20px"}} />
              <Text color="white" fontWeight={400} fontSize={{ base:"9px",lg: "15px" }}>
                Scalable & Flexible Architecture
              </Text>
            </MotionFlex>
            <MotionFlex variants={itemVariants} alignItems="center" gap="10px">
              <Image src="/svg/About/capabilities-icon-about.svg" alt="icon" maxW={{base:"20px"}} />
              <Text color="white" fontWeight={400} fontSize={{ base:"9px",lg: "15px" }}>
                Seamless Integration Capabilities
              </Text>
            </MotionFlex>
          </MotionFlex>
        </MotionBox>

        <Box display={{ base: "block", lg: "block" }} width="40%" />
      </MotionFlex>
    </MotionBox>
  );
};

export default OfferCard01;