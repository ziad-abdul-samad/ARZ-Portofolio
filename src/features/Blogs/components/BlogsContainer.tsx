import { Button, Flex, Image, Box } from "@chakra-ui/react";

const BlogsContainer = () => {
  return (
    <Box bg={"#010200"} zIndex={1} position="relative" pb="200px">
      <Flex
        px={{base:"30px",md:"70px"}}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5px"}
          flexWrap={"wrap"}
          py={"30px"}
        >
          <Flex
            flexBasis={{ base: "100px", md: "300px" }}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"10px"}
            borderRadius={"21px"}
            bg={"#9FFE0080"}
          >
            <Image src="image/blog-image01.png" />
          </Flex>
          <Flex
            flexBasis={{ base: "100px", md: "300px" }}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"10px"}
            borderRadius={"21px"}
            bg={"#9FFE0080"}
          >
            <Image src="image/blog-image02.png" />
          </Flex>
          <Flex
            flexBasis={{ base: "100px", md: "300px" }}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"10px"}
            borderRadius={"21px"}
            bg={"#9FFE0080"}
          >
            <Image src="image/blog-image03.png" />
          </Flex>
          <Flex
            flexBasis={{ base: "100px", md: "300px" }}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"10px"}
            borderRadius={"21px"}
            bg={"#9FFE0080"}
          >
            <Image src="image/blog-image04.png" />
          </Flex>
          <Flex
            flexBasis={{ base: "100px", md: "300px" }}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"10px"}
            borderRadius={"21px"}
            bg={"#9FFE0080"}
          >
            <Image src="image/blog-image05.png" />
          </Flex>
          <Flex
            flexBasis={{ base: "100px", md: "300px" }}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"10px"}
            borderRadius={"21px"}
            bg={"#9FFE0080"}
          >
            <Image src="image/blog-image06.png" />
          </Flex>
        </Flex>
        <Button
          fontSize={{base:"14px",md:"17px"}}
          fontWeight={700}
          color={"white"}
          px={"35px"}
          py={"18px"}
          my={"30px"}
          borderBottom={"solid 5px #4C4C4C"}
          borderRadius={"8px"}
          bg={"black"}
          boxShadow={`
        0px 3.13px 2.51px #FFFFFF40,    
        0px -3.13px 2.51px #00000080    
  `}
        >
          View all blogs
        </Button>
      </Flex>
      <Box
        position="absolute"
        bottom={{base:"200px",md:"100px"}}
        height="470px"
        width={"full"}
        mx={"auto"}
        backgroundImage="url('image/blogs-container-bg.png')"
        backgroundSize="contain"
        backgroundPosition="center bottom"
        backgroundRepeat="no-repeat"
        zIndex="-1"
      />
    </Box>
  );
};

export default BlogsContainer;
