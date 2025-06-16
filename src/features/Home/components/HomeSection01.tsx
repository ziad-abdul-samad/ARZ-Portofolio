import { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Image as ChakraImage,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionImg = motion.img;

const logos = [
  "/svg/Home/home-logo.svg",
  "/svg/Home/home-logo-lime.svg",
  "/svg/Home/home-logo-white.svg",
];

const HomeSection01 = () => {
  const [logoIndex, setLogoIndex] = useState(0);
  const [prevLogoIndex, setPrevLogoIndex] = useState(0);
  const [showingFirst, setShowingFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevLogoIndex(logoIndex);
      setLogoIndex((prev) => (prev + 1) % logos.length);
      setShowingFirst((s) => !s);
    }, 2000);
    return () => clearInterval(interval);
  }, [logoIndex]);

  return (
    <Box position="relative" overflow="hidden">
      <MotionImg
        src="image/home-bg.png"
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <Flex
        px={{ base: "30px", lg: "70px" }}
        py="60px"
        color="white"
        justify="space-between"
        alignItems="center"
        position="relative"
        height="100%"
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ base: "40px", lg: "0" }}
      >
        <MotionFlex
          flexDir="column"
          gap="25px"
          maxW="600px"
          py="40px"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Heading
            fontSize={{ base: "40px", lg: "65px" }}
            fontWeight={900}
            lineHeight="100%"
            color="#F2F2F2"
          >
            Dominating the digital jungle
          </Heading>
          <Text
            fontSize={{ base: "22px", lg: "31px" }}
            fontWeight={700}
            color="#FEFEFE"
          >
            Software & Marketing Solutions Engineered for Your Success
          </Text>
          <Text
            fontSize={{ base: "16px", lg: "20px" }}
            fontWeight={300}
            color="#FEFEFE"
          >
            We create marketing, branding, and software solutions that help
            businesses build their brands.
          </Text>

          <Flex gap="30px" alignItems="center" py="20px">
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
              View Portfolio
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

          <Flex justify="flex-start" alignItems="center" gap="30px" pt="30px">
            {[
              {
                num: "10+",
                text: "Team Experience Years",
                icon: "exp-icon-home",
              },
              {
                num: "12+",
                text: "Digital Services",
                icon: "digital-icon-home",
              },
              {
                num: "20+",
                text: "Successful Projects",
                icon: "rocket-icon-home",
              },
            ].map((item, i) => (
              <Flex key={i} flexDir="column">
                <Text fontSize={{ lg: "29px" }} fontWeight={500}>
                  {item.num}
                </Text>
                <Flex justify="flex-start" align="center" gap="5px">
                  <ChakraImage src={`/svg/Home/${item.icon}.svg`} alt="icon" />
                  <Text fontSize="12px" fontWeight={400}>
                    {item.text}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </MotionFlex>

        <MotionFlex
          alignItems="center"
          justifyContent="space-between"
          width={{ base: "300px", lg: "420px" }}
          height={{ base: "300px", lg: "420px" }}
          position="relative"
          flexShrink={0}
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <MotionImg
            src="/image/logos-hover-bg.png"
            alt="hover-bg"
            style={{
              position: "absolute",
              width: "400%",
              height: "400%",
              objectFit: "contain",
              top: "50%",
              left: "50%",
              transformOrigin: "left center",
              zIndex: 0,
            }}
            animate={{
              y: [30, -30, 80, 50, 30],
              x: [60, 20, 0, -90, -20],
              translateX: "-50%",
              translateY: ["-50%", "calc(-50% - 10px)", "-50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <MotionImg
            src="/image/white-bg-hoverlogos.png"
            alt="white-hover-bg"
            style={{
              position: "absolute",
              width: "100%",
              height: "80%",
              objectFit: "contain",
              top: "52%",
              left: "52%",
              transformOrigin: "right center",
              zIndex: 0,
              filter: "brightness(1.5)",
            }}
            animate={{
              y: [35, -25, 85, 55, 35],
              x: [65, 25, 5, -85, -15],
              translateX: "-50%",
              translateY: ["-50%", "calc(-50% - 8px)", "-50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />

          <MotionImg
            key="logo1"
            src={logos[showingFirst ? logoIndex : prevLogoIndex]}
            alt="logo"
            style={{
              position: "absolute",
              maxWidth: "420px",
              height: "100%",
              objectFit: "contain",
              top: 0,
              left: 0,
              zIndex: 2,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
          <MotionImg
            key="logo2"
            src={logos[showingFirst ? prevLogoIndex : logoIndex]}
            alt="logo"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </MotionFlex>
      </Flex>
    </Box>
  );
};

export default HomeSection01;
