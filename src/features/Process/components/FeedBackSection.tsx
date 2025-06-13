import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import FeedBackCard from "./FeedBackCard";

const FeedBackSection = () => {
  return (
    <>
      <Box py={"100px"} bg={"#010200"}>
        <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"} gap={"40px"}>
            <Image src="svg/Process/stars-icons.svg"/>
            <Heading fontWeight={700} fontSize={"57px"} color={"white"} textAlign={"center"}>
                What  they say about us?
            </Heading>
            <FeedBackCard/>
        </Flex>
      </Box>
    </>
  );
};

export default FeedBackSection;
