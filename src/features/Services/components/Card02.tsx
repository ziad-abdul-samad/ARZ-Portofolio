import { Flex, Image, Text } from "@chakra-ui/react";

const Card02 = () => {
  return (
    <>
      <Flex
        bg={"#020202"}
        borderRadius={"15px"}
        padding={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Image
          src="/image/service-image02.png"
          alt="image"
          borderRadius={"8px"}
          borderTopRightRadius={"none"}
          borderBottomRightRadius={"none"}
        ></Image>
        <Flex flexDir={"column"} alignItems={"flex-start"} gap={"10px"}>
          <Image src="svg/Services/service-icon02.svg"></Image>
          <Text fontWeight={700} fontSize={"18px"} color={"#9FFE00"}>
            UI UX Design
          </Text>
          <Text fontWeight={400} fontSize={"12px"} color={"white"}>
            Designing captivating interfaces and user experiences that leave
            lasting impressions and improve usability
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Card02;
