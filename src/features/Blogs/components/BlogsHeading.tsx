import { Flex, Text } from "@chakra-ui/react";

const BlogsHeading = () => {
  return (
    <>
      <Flex
        py={"100px"}
        px={"70px"}
        bg={"#010200"}
        bgImage="url('image/blogs-title-effect.png')"
        bgSize="contain"
        bgPos="center"
        bgRepeat="no-repeat"
        w={"100%"}
        height={"100%"}
        zIndex={-1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontWeight={700} fontSize={"99px"} color={"white"}>
        Bloggggggggs

        </Text>
      </Flex>
    </>
  );
};

export default BlogsHeading;
