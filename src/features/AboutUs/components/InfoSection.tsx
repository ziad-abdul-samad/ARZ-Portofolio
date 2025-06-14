import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MotionImage = motion.img;

const InfoSection = () => {
  const [currentBg, setCurrentBg] = useState("image/ready-animate-v1.png");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) =>
        prev === "image/ready-animate-v1.png"
          ? "image/ready-animate-v2.png"
          : "image/ready-animate-v1.png"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      px={{ base: "20px", md: "70px" }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundImage="url('image/ready-bg.png')"
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        zIndex={0}
      />

      <Box
        position="absolute"
        top="50%"
        left="50%"
        width={{ base: "300px", md: "450px" }}
        height={{ base: "300px", md: "450px" }}
        transform="translate(-50%, -50%)"
        zIndex={1}
        pointerEvents="none"
      >
        <AnimatePresence mode="wait">
          <MotionImage
            key={currentBg}
            src={currentBg}
            alt="Animated Glow"
            initial={{ rotate: 0, scale: 1, opacity: 0 }}
            animate={{
              rotate: -360,
              scale: [1, 0.6, 1],
              opacity: 0.7,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 5,
              ease: "linear",
              opacity: { duration: 0.4 },
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </AnimatePresence>
      </Box>

      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="20px"
        py="60px"
        bgGradient="linear(to-t, #12130F, #000000)"
        color="white"
        mx="auto"
        maxW="1200px"
        borderRadius="20px"
        position="relative"
        zIndex={2}
        textAlign="center"
      >
        <Text fontSize={{ base: "28px", lg: "36px" }} fontWeight={700}>
          Ready to Accelerate Your Vision?
        </Text>
        <Text
          fontSize={{ base: "18px", lg: "21px" }}
          fontWeight={300}
          maxW="800px"
          px="20px"
        >
          Let's turn your next big idea into powerful digital reality.
        </Text>

        <Flex gap="50px" py="20px" align="center" wrap="wrap" justify="center">
          <Button
            fontSize="13px"
            fontWeight={700}
            color="white"
            px="25px"
            py="10px"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              height: "5px",
              background: "linear-gradient(to right, #4E4E4E, #262626)",
              borderRadius: "0 0 8px 8px",
            }}
            bg="#2E2E2E"
            borderRadius="8px"
          >
            Contact us
          </Button>

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
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default InfoSection;
