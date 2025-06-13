import { Box, Button, Flex, Text } from "@chakra-ui/react";

const InfoSection = () => {
    return ( <>
    <Box px={"70px"}>

    <Flex flexDir={"column"} justifyItems={"center"} alignItems={"center"} gap={"20px"}  py={"40px"} bgGradient="linear(to-t, #12130F, #000000)" color={"white"}  mx={"auto"} borderRadius={"20px"}>
        <Text fontSize={{lg:"36px"}} fontWeight={700}>Ready to Accelerate Your Vision?</Text>
        <Text fontSize={{lg:"21px"}} fontWeight={300}>Let’s turn your next big idea into powerful digital reality.</Text>
        <Flex justifyItems={"center"} py={"20px"} gap={"50px"} alignItems={"center"}>
            <Button>Contact Us</Button>
            <Button>Hire Us</Button>
        </Flex>
    </Flex>
    </Box>
    </> );
}
 
export default InfoSection;