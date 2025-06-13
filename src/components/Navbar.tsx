import { Button, Flex, Image, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      justify={"space-between"}
      px={"70px"}
      py={"15px"}
      bg={"black"}
      color={"white"}
      alignItems={"center"}
    >
      <Image src="svg/arz-logo.svg" alt="logo" />
      <Flex gapX={"20px"} fontSize={"12px"} alignItems={"center"}>
        <Link
          bg={"#FFFFFF1C"}
          color={"white"}
          borderRadius={"9px"}
          px={"16px"}
          py={"8px"}
          href="#Home"
        >
          Home
        </Link>
        <a href="#AboutUs">About Us</a>
        <a href="#Services">Services</a>
        <a href="#OurProjects">Our Projects</a>
        <a href="#OurProcess">Our Process</a>
        <a href="#Blogs">Blogs</a>
      </Flex>
      <Flex alignItems={"center"} gap={"30px"}>
        <Button
          fontSize={"13px"}
          fontWeight={700}
          color={"white"}
          px="25px"
          py="10px"
          borderBottom={"solid 5px #4C4C4C"}
          borderRadius={"8px"}
          bg={"#2E2E2E"}
        >
          Contact us
        </Button>
        <Button
          borderBottom="8px solid #6C9B23"
          bg="#9BFF00"
          color="black"
          borderRadius="11px"
          px="25px"
          py="10px"
          mx="auto"
          fontSize="13px"
          fontWeight={700}
        >
          Hire us
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
