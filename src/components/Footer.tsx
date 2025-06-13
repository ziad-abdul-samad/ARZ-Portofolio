import { Box, Flex, Text, Image, VStack } from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      bgImage="url('/image/footer-bg.png')"
      bgSize="cover"
      bgPos="center"
      py={10}
      px={"140px"}
    >
      <Flex justifyContent={"start"} alignItems={"baseline"} gap={"50px"}>
        <Flex flexDir={"column"} justifyContent={"flex-start"} gap={"5px"}>
          <Flex alignItems={"center"} gap={"5px"}>
            <Image w={"47px"} src="svg/Footer/arz-logo-footer.svg" />
            <Text fontWeight={400} fontSize={"36px"} color={"white"}>
              ARZ
            </Text>
          </Flex>
          <Box h={"7px"} w={"234px"} bg={"#9FFE00"}></Box>
          <Text fontWeight={400} fontSize={"21px"} color={"white"}>
            Ape Revolution Zone
          </Text>
          <Flex alignItems={"center"} color={"white"} gap={"4px"}>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaXTwitter />
            <FaTelegram />
            <IoLogoWhatsapp />
          </Flex>
        </Flex>
        <Flex alignItems={"baseline"} gap={"10px"} fontWeight={400} color={"#C8C8C8"}>
          <VStack>
            <Text>Home</Text>
            <Text>About Us</Text>
            <Text>Services</Text>
            <Text>Projects</Text>
          </VStack>
          <VStack>
            <Text>Process</Text>
            <Text>Blog</Text>
            <Text>Portfolio</Text>
          </VStack>
          <VStack>
            <Text>Contact us</Text>
          </VStack>
        </Flex>
      </Flex>
      <Image src="image/arz-footer-typo.png" mb={"-38px"}/>
    </Box>
  );
};

export default Footer;
