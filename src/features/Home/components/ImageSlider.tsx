import { HStack, Image, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const logos = [
    "svg/Home/shattib-logo.svg",
    "svg/Home/awaed-logo.svg",
    "svg/Home/pca-logo.svg",
    "svg/Home/alpha-logo.svg",
    "svg/Home/fc-logo.svg",
    "svg/Home/shattib-logo.svg",
    "svg/Home/awaed-logo.svg",
    "svg/Home/pca-logo.svg",
    "svg/Home/alpha-logo.svg",
    "svg/Home/fc-logo.svg",
    "svg/Home/shattib-logo.svg",
    "svg/Home/awaed-logo.svg",
    "svg/Home/pca-logo.svg",
    "svg/Home/alpha-logo.svg",
    "svg/Home/fc-logo.svg",
    
  ];

  const [txValue, setTxValue] = useState(50);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTxValue((prev) => (prev <= -100 ? 100 : prev - 0.1));
    }, 20);
    return () => clearInterval(intervalId);
  }, [txValue]);

  return (
    <Box

      position="relative"
      // background="whiteAlpha.200"
      overflow="hidden"
      padding="4"
      width="full"
      lgDown={{ width: "vw" }}
      backgroundColor={"#0B0B0B"}
      color={"#D5D5D5"}
    >
      <Box
        position="absolute"
        left="0"
        top="0"
        width="1/4"
        height="full"
        // background="blackAlpha.700"
        zIndex="1"
      />

      <HStack gap="16" transform={`translateX(${txValue}%)`}>
        {logos.map((logo, index) => (
          <Image key={index} src={logo} />
        ))}
      </HStack>

      <Box
        position="absolute"
        right="0"
        top="0"
        width="1/4"
        height="full"
        // background="blackAlpha.700"
        zIndex="1"
      />
    </Box>
  );
};

export default ImageSlider;
