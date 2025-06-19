import { Flex, Image, Text, Box } from "@chakra-ui/react";

const HeadingTitle = () => {
  return (
    <Box position="relative" bg={"#0B0B0B"} overflow="hidden">
      <Flex
        flexDir={"column"}
        color={"white"}
        alignItems={"flex-start"}
        px={{base:"30px",md:"70px"}}
        py={"100px"}
        position="relative" 
        zIndex={1}
      >
        <Image
          src="image/projects-bg.png"
          position={"absolute"}
          zIndex={0}
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)" 
          minW="100%" 
          minH="100%" 
          objectFit="cover"
        />

        <Text as={"h1"} fontSize={{ base: "29px" , lg: "60px" }} fontWeight={700}>
          Projects
        </Text>
        <Text fontSize={{ base:"11px",lg: "22px" }} fontWeight={300}>
          See How We've Made a Difference
        </Text>
      </Flex>
    </Box>
  );
};

export default HeadingTitle;