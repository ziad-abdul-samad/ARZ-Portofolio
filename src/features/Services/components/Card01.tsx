import { Flex, Image, Text } from "@chakra-ui/react";

const Card01 = () => {
  return (
    <>
      <Flex bg={"#020202"} borderRadius={"15px"} padding={"20px"} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
        <Image
          src="/image/service-image01.png"
          alt="image"
          borderRadius={"8px"}
          borderTopRightRadius={"none"}
          borderBottomRightRadius={"none"}
        ></Image>
        <Flex flexDir={"column"} alignItems={"flex-start"} gap={"10px"}>
          <Image src="svg/Services/service-icon01.svg"></Image>
          <Text fontWeight={700} fontSize={"18px"} color={"#9FFE00"}>
            Web Development
          </Text>
          <Text fontWeight={400} fontSize={"12px"} color={"white"}>
            We Craft scalable and robust web applications tailored to your
            business needs, delivering seamless user experiences.{" "}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Card01;
