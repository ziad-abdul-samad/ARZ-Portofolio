import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const BlogsSection = () => {
    return ( <>
    <Flex justifyContent={"space-between"} alignItems={"center"} bg={"#010200"} px={"70px"} py={"100px"} gap={"30px"}>
        <Flex flexDir={"column"} justifyContent={"start"} gap={"30px"}>
            <Heading fontSize={"57px"} fontWeight={700} color={"white"}>Blogs</Heading>
            <Text fontSize={"30px"} fontWeight={300} color={"white"}>tay inspired and informed with articles that help you grow, create, and succeed</Text>
        </Flex>
        <Image src="svg/Blogs/blogs-white-icon.svg"/>
    </Flex>
    </> );
}
 
export default BlogsSection;