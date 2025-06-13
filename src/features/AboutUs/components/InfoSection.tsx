import { Box, Button, Flex,  Text } from "@chakra-ui/react";

const InfoSection = () => {
  return (
    <>
      <Box
      
        px={"70px"}
        pos={"relative"}
        backgroundImage="url('image/ready-bg.png')"
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat={"no-repeat"}
      >
        <Flex
          flexDir={"column"}
          justifyItems={"center"}
          alignItems={"center"}
          gap={"20px"}
          py={"40px"}
          bgGradient="linear(to-t, #12130F, #000000)"
          color={"white"}
          mx={"auto"}
          borderRadius={"20px"}
        >
          <Text fontSize={{ lg: "36px" }} fontWeight={700}>
            Ready to Accelerate Your Vision?
          </Text>
          <Text fontSize={{ lg: "21px" }} fontWeight={300}>
            Let’s turn your next big idea into powerful digital reality.
          </Text>
          <Flex
            justifyItems={"center"}
            py={"20px"}
            gap={"50px"}
            alignItems={"center"}
          >
            <Button
              fontSize={"13px"}
              fontWeight={700}
              color={"white"}
              px="25px"
              py="10px"
              borderBottom={"solid 5px #4C4C4C"}
              borderRadius={"8px"}
              bg={"#2E2E2E"}
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
              mx="auto"
              fontSize="13px"
              fontWeight={700}
            >
              Hire us
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default InfoSection;
