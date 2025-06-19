import { Flex, Text } from "@chakra-ui/react";

const BlogsHeading = () => {
  return (
    <>
      <Flex
        py={"100px"}
        px={{base:"30px",md:"70px"}}
        bg={"#010200"}
        bgImage="url('image/blogs-title-effect.png')"
        bgSize="contain"
        bgPos="center"
        bgRepeat="no-repeat"
        w={{base:"75%",md:"100%"}}
        height={"100%"}
        mx={"auto"}
        zIndex={-1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontWeight={700} fontSize={{base:"29px",md:"66px" ,lg:"99px"}} color={"white"}>
        Bloggggggggs

        </Text>
      </Flex>
    </>
  );
};

export default BlogsHeading;
