import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import FeedBackCard from "./FeedBackCard";

const FeedBackSection = () => {
  return (
    <>
      <Box py={{base:"50px",md:"100px"}} bg={"#010200"}>
        <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"} gap={"40px"}>
            <Image src="svg/Process/stars-icons.svg" maxW={{base:"100px" , md:"250px"}}/>
            <Heading fontWeight={700} fontSize={{base:"18px",md:"57px"}} color={"white"} textAlign={"center"}>
                What  they say about us?
            </Heading>
            <FeedBackCard/>
        </Flex>
      </Box>
    </>
  );
};

export default FeedBackSection;
