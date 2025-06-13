import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const ProcessSection02 = () => {
    return ( <>
    <Box bg={"black"} py={"60px"}>
        <Flex flexDir={"column"} justifyContent={"center"} gap={"20px"} alignItems={"center"}>
        <Heading fontSize={"51px"} fontWeight={700} color={"white"}> Industries we help</Heading>
        <Text fontSize={"20px"} fontWeight={300} color={"white"}>We partner with forward-thinking sectors to deliver innovation, performance, and lasting impact.</Text>
        </Flex>
    </Box>
    </> );
}
 
export default ProcessSection02;