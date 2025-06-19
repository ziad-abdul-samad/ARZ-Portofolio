import { Badge, Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

const Cards = [
  {
    badge: "Step #1",
    title: "Understand Your Vision",
    desc: "We begin by deeply understanding your goals, challenges",
    icon: "svg/Process/Strategic-icon-card01.svg",
  },
  {
    badge: "Step #2",
    title: "Build the Roadmap",
    desc: "We crafts a clear plan outlining milestones, and timelines",
    icon: "svg/Process/Strategic-icon-card02.svg",
  },
  {
    badge: "Step #3",
    title: "Deliver Success",
    desc: "From design to deployment, we ensure every detail is executed",
    icon: "svg/Process/Strategic-icon-card03.svg",
  },
  {
    badge: "Step #4",
    title: "Grow Beyond",
    desc: "Post-launch, we help you evolve—through optimization, scaling, and ongoing innovation",
    icon: "svg/Process/Strategic-icon-card04.svg",
  },
];

const StrategicInfoSection = () => {
  return (
    <>
      <Box bg="black" py={{base:"0px",md:"50px"}} position="relative" overflow="hidden">
        {/* Wrapper to control blur bleed */}
        <Box position="relative" textAlign="center" w="100%" h="300px">
          {/* Blurred background layer */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgImage="url('image/title-bg-strategy.png')"
            backgroundPosition="center"
            bgSize="cover"
            filter="blur(12px)"
            zIndex={0}
          />

          {/* Solid black overlay to prevent extra brightness (optional) */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            py={"50px"}
            zIndex={1}
          />

          {/* Text content stays sharp */}
          <Box position="relative" zIndex={2} py={{base:"0px",md:"50px"}}>
            <Heading
              fontSize={{base:"18px",md:"50px"}}
              fontWeight="700"
              color="white"
              lineHeight="100%"
            >
              A Strategic Journey <br /> from Vision to Impact
            </Heading>
          </Box>
        </Box>
      </Box>
      <Grid
        gridTemplateColumns={{base:["repeat(1, 1fr)"],md:["repeat(2, 1fr)"]}}
        bg={"black"}
        px={{base:"30px",md:"90px"}}
        pb={"50px"}
        placeItems="center"
        gap={{base:"28px",md:"40px"}}
      >
        {Cards.map((card, index) => (
          <Flex pos={"relative"} key={index} flexDir={"column"} bg={"#151714"} overflow={"hidden"} borderRadius={"17px"} px={"20px"} py={"40px"} maxH={"245px"} h={{md:"245px"}}>
            <Image pos={"absolute"} bottom={0} right={0} src="image/card-effect-strategy.png" />
            <Badge
              w={"fit"}
              bg={"#9FFE001A"}
              border={"solid #FFFFFF1A 0.7px"}
              borderRadius={"17px"}
              px={"15px"}
              py={"6px"}
              color={"#9FFE00"}
              fontSize={{base:"7px",md:"12px"}}
              fontWeight={400}
            >
              {card.badge}
            </Badge>
            <Flex justifyContent={"space-between"} alignItems={"flex-end"} gap={"10px"}>
                <Flex flexDir={"column"} gap={"10px"} >
                    <Heading fontSize={{base:"14px",md:"20px"}} fontWeight={700} color={"white"}>{card.title}</Heading>
                    <Text maxW={"280px"} fontSize={{base:"9px",md:"12px"}} fontWeight={400} color={"white"}>{card.desc}</Text>
                </Flex>
                <Image src={card.icon} maxW={{base:"58px" , md:"99px"}}/>
            </Flex>
          </Flex>
        ))}
      </Grid>
    </>
  );
};

export default StrategicInfoSection;
