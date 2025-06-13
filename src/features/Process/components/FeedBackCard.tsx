import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const FeedBackCard = () => {
  return (
    <>
      <Box bg={"#1b1b1b"} borderRadius={"8px"} py={"31px"} px={"140px"} position={"relative"}>
        <Image src="svg/Process/br-feedback-card.svg" position={"absolute"} right={"-80px"} bottom={"-100px"}/>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"70px"}
        >
          <Flex>
            <Flex
              bg={"#435f13"}
              py={"50px"}
              borderRadius={"8px"}
              overflow={"visible"}
              flexDir={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"80px"}
            >
              <Flex
                justify={"center"}
                alignItems={"center"}
                bg={"#0D0D0D"}
                borderRadius={"8px"}
                w={"120%"}
                padding={"10px"}
              >
                <Image src="image/adel-photo.png" />
              </Flex>
              <Image src="svg/Process/awaed-logo-feed.svg" />
            </Flex>
          </Flex>
          <Flex flexDir={"column"} justifyContent={"flex-start"} gap={"15px"}>
            <Heading fontWeight={900} fontSize={"40px"} color={"white"}>
              Adel Alteeq
            </Heading>
            <Text fontSize={"24px"} fontWeight={700} color={"#9FFE00"}>
              CEO of awaed
            </Text>
            <Box bg={"#D9D9D9"} w={"264px"} h={"6px"}></Box>
            <Flex flexDir={"column"} justifyContent={"start"}>
              <Image src="svg/Process/tr-icon-feed.svg" alignSelf={"end"} mb={"5px"}/>
              <Text fontSize={"19px"} fontWeight={300} color={"white"} maxW={"420px"}>
                What we received exceeded our expectations. ARZ didn’t just
                build games—they crafted immersive, branded experiences that
                perfectly combined entertainment with fintech. Their attention
                to detail, creative problem-solving, and dedication to our goals
                were evident at every stage. Visitors were thrilled, and the
                buzz around our booth was undeniable
              </Text>
              <Image mt={"14px"} src="svg/Process/bl-icon-feed.svg" alignSelf={"start"} />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default FeedBackCard;
