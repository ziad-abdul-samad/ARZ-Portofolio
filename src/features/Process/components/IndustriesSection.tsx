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
    <>
      <Flex justifyContent={"space-between"} alignItems={"baseline"} bg={"black"} px={"70px"} gap={"20px"}>
        {Cards.map((card, index) => (
          <Flex key={index} flexDir={"column"} justifyContent={"flex-start"} gap={"10px"} px={"30px"} py={"40px"}>
            <Box
              width={"40px"}
              height={"40px"}
              borderRadius={"full"}
              alignSelf={"end"}
              bg={card.color}
            ></Box>
            <Image maxW={"80px"} pl={"10px"} src={card.icon} />
            <Heading fontWeight={700} color={"white"} fontSize={"17px"}> {card.title}</Heading>
            <Text fontWeight={400} color={"white"} fontSize={"12px"} maxW={"224px"}>{card.desc}</Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default IndustriesSection;
