import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const GetStartedSection = () => {
  return (
    <>
      <Box
        px={"70px"}
        backdropFilter="blur(12px)"
        bgGradient="to-t"
        gradientFrom="#000000"
        gradientVia="#223107"
        gradientTo="#000000"
        py="100px"
      >
        <Box
          py="200px"
          bgImage="url('image/getstart-section-bg.png')"
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          borderRadius={"40px"}
        >
          <Flex
            px={"70px"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            gap={"40px"}
          >
            <Heading
              fontWeight={900}
              fontSize={"75px"}
              color={"white"}
              mt={"50px"}
            >
              LET’S GET STARTED
            </Heading>
            <Text fontSize={"26px"} fontWeight={400} color={"white"}>
              we're ready to turn your ideas into impact <br /> with smart tech
              and standout design.
            </Text>
            <Button
              bg={"#9BFF00"}
              border={"solid 6px #6C9B23"}
              px={"44px"}
              py={"22px"}
              fontWeight={700}
              fontSize={"23px"}
              color={"black"}
              borderRadius={"13px"}
            >
              Hire us
            </Button>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"70px"}
            >
              <Flex
                textAlign={"center"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"13px"}
              >
                <Image src="svg/Process/strated-sec-icon01.svg" />
                <Text fontWeight={700} fontSize={"17px"} color={"white"}>
                  Multiple services
                </Text>
              </Flex>
              <Flex
                textAlign={"center"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"13px"}
              >
                <Image src="svg/Process/strated-sec-icon02.svg" />
                <Text fontWeight={700} fontSize={"17px"} color={"white"}>
                  {" "}
                  Experienced team
                </Text>
              </Flex>
              <Flex
                textAlign={"center"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"13px"}
              >
                <Image src="svg/Process/strated-sec-icon03.svg" />
                <Text fontWeight={700} fontSize={"17px"} color={"white"}>
                  Scalable solutions
                </Text>
              </Flex>
              <Flex
                textAlign={"center"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"13px"}
              >
                <Image src="svg/Process/strated-sec-icon04.svg" />
                <Text fontWeight={700} fontSize={"17px"} color={"white"}>
                  Planning till launch support
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default GetStartedSection;
