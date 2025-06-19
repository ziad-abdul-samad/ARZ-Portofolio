import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Cards = [
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

const IndustriesSection = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-start"
      bg="black"
      px="70px"
      py="60px"
      gap="20px"
      flexWrap="wrap"
    >
      {Cards.map((card, index) => (
        <Box
          key={index}
          position="relative"
          w="263.86px"
          h="344.31px"
          borderRadius="8.65px"
          overflow="hidden"
          _before={{
            content: `""`,
            position: "absolute",
            top: 0,
            left: 0,
            w: "100%",
            h: "100%",
            bg: "rgba(159, 254, 0, 1)",
            filter: "blur(500px)",
            zIndex: 0,
          }}
        >
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
              width={{base:"23px",md:"40px"}}
              height={{base:"23px",md:"40px"}}
              minH={{md:"40px"}}
              borderRadius="full"
              alignSelf="flex-end"
              bg={card.color}
              
            />
            <Image maxW="70px" pl="10px" src={card.icon}  />
            <Heading fontWeight={700} color="white" fontSize={{base:"12px",md:"17px"}}>
              {card.title}
            </Heading>
            <Text
              fontWeight={400}
              color="white"
              fontSize={{base:"10px",md:"12px"}}
              lineHeight="1.6"
            >
              {card.desc}
            </Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default IndustriesSection;
