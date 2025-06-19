import { useState, useCallback, useEffect } from "react";
import { Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";

interface CardType {
  color: string;
  icon: string;
  title: string;
  desc: string;
}

const Cards: CardType[] = [
  {
    color: "#53B2E6",
    icon: "svg/Process/industries-icon01.svg",
    title: "Finance & FinTech",
    desc: "We build secure, scalable financial platforms that empower digital transactions,",
  },
  {
    color: "#F26F7C",
    icon: "svg/Process/industries-icon02.svg",
    title: "eLearning",
    desc: "We design interactive educational platforms that enhance knowledge delivery,",
  },
  {
    color: "#F6D429",
    icon: "svg/Process/industries-icon03.svg",
    title: "Entertainment ",
    desc: "We craft immersive digital experiences—from games to content platforms",
  },
  {
    color: "#78EBBF",
    icon: "svg/Process/industries-icon04.svg",
    title: "E-commerce & Retail ",
    desc: "We create seamless online shopping experience Whether B2B or B2C—we help brands sell smarter and scale faster",
  },
];

const Card = ({ card }: { card: CardType }) => (
  <Box
    position="relative"
    w="263.86px"
    h="344.31px"
    borderRadius="8.65px"
    overflow="hidden"
    flexShrink={0}
  >
    <Box
      position="absolute"
      top={0}
      left={0}
      w="100%"
      h="100%"
      bg="rgba(159, 254, 0, 1)"
      filter="blur(500px)"
      zIndex={0}
    />
    <Box
      position="relative"
      zIndex={1}
      background="rgba(0, 0, 0, 0.25)"
      backdropFilter="blur(500px)"
      borderRadius="8.65px"
      h="100%"
      p="30px"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap="15px"
    >
      <Box
        width={{ base: "23px", md: "40px" }}
        height={{ base: "23px", md: "40px" }}
        minH={{ md: "40px" }}
        borderRadius="full"
        alignSelf="flex-end"
        bg={card.color}
      />
      <Image maxW="70px" pl="10px" src={card.icon} />
      <Heading fontWeight={700} color="white" fontSize={{ base: "12px", md: "17px" }}>
        {card.title}
      </Heading>
      <Text fontWeight={400} color="white" fontSize={{ base: "10px", md: "12px" }} lineHeight="1.6">
        {card.desc}
      </Text>
    </Box>
  </Box>
);

export default function IndustriesSection() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <Box bg="black" px={{ base: "10px", lg: "70px" }} py="60px">
      {isMobile ? (
        <>
          <Box ref={emblaRef} overflow="hidden" maxW="280px" mx="auto">
            <Flex gap="20px" style={{ userSelect: "none" }}>
              {Cards.map((card) => (
                <Card key={card.title} card={card} />
              ))}
            </Flex>
          </Box>
          <Flex justify="center" mt="20px" gap="10px">
            {Cards.map((_, index) => (
              <Box
                key={index}
                w="10px"
                h="10px"
                bg={selectedIndex === index ? "white" : "rgba(255, 255, 255, 0.5)"}
                borderRadius="full"
                cursor="pointer"
                onClick={() => scrollTo(index)}
                transition="background-color 0.3s"
              />
            ))}
          </Flex>
        </>
      ) : (
        <Flex justify="space-between" gap="20px" flexWrap="wrap">
          {Cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </Flex>
      )}
    </Box>
  );
}
