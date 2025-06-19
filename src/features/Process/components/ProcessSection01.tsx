import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ProcessSection01 = () => {
  return (
    <Box position="relative" minH={{ base: "400px", md: "600px" }}>
      <Image
        src="image/process-bg.png"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-1}
      />

      <Flex
        flexDir="column"
        gap="20px"
        justifyContent="center"
        alignItems="center"
        height="100%"
        px={{ base: "20px", md: 0 }}
        textAlign="center"
      >
        <Text
          fontWeight={700}
          fontSize={{ base: "25px", md: "56px" }}
          color="white"
          py={"50px"}
        >
          Our process
        </Text>
        <Text
          fontWeight={700}
          fontSize={{ base: "13px", md: "30px" }}
          color="white"
        >
          From concept to{" "}
          <Text as="span" color="#9FFE00">
            completion
          </Text>
        </Text>
        <Text
          fontWeight={400}
          fontSize={{ base: "12px", md: "20px" }}
          color="white"
        >
          Explore our streamlined process
        </Text>
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        my="20px"
        px={{ base: "30px" }}
      >
        {[
          {
            src: "svg/Process/yellow-rec-animate.svg",
            color: "#FAB03B",
            duration: 2.5,
          },
          {
            src: "svg/Process/red-rec-animate.svg",
            color: "#FF0B23",
            duration: 2.2,
          },
          {
            src: "svg/Process/blue-rec-animate.svg",
            color: "#4792FF",
            duration: 2.0,
          },
          {
            src: "svg/Process/lime-rec-animate.svg",
            color: "#9FFE00",
            duration: 2.7,
          },
        ].map(({ src, color, duration }, index) => (
          <Flex key={index} flexDir="column" alignItems="center">
            <motion.div
              animate={{ y: [0, 50, 0] }}
              transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <motion.img src={src} />
              <motion.div
                style={{
                  width: "76px",
                  height: "76px",
                  backgroundColor: color,
                  borderRadius: "50%",
                  marginTop: "-30px",
                }}
              />
            </motion.div>
          </Flex>
        ))}
      </Flex>

      <Flex mt="180px"  py={"40px"}>
        <Button
          borderBottom="8px solid #6C9B23"
          bg="#9BFF00"
          color="black"
          borderRadius="11px"
          px="37px"
          py="20px"
          mx="auto"
          fontSize="18px"
          fontWeight={700}
        >
          Explore Process
        </Button>
      </Flex>
    </Box>
  );
};

export default ProcessSection01;
