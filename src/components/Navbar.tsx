import { useState, useEffect, useMemo } from "react";
import { Box, Button, Flex, Image, Link, VStack } from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("#Home");

  const navLinks = useMemo(
    () => [
      { label: "Home", href: "#Home" },
      { label: "About Us", href: "#AboutUs" },
      { label: "Services", href: "#Services" },
      { label: "Our Projects", href: "#OurProjects" },
      { label: "Our Process", href: "#OurProcess" },
      { label: "Blogs", href: "#Blogs" },
    ],
    []
  );

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let currentSection = "#Home";

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            currentSection = link.href;
          }
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        px={{ base: "20px", lg: "70px" }}
        py="15px"
        bg="black"
        color="white"
        zIndex="1000"
        position="sticky"
        top="0"
      >
        <Image src="svg/arz-logo.svg" alt="logo" height="40px" />

        <Flex
          display={{ base: "none", lg: "flex" }}
          gap="20px"
          fontSize="12px"
          alignItems="center"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              color="white"
              px={activeLink === link.href ? "20px" : undefined}
              py={activeLink === link.href ? "8px" : undefined}
              bg={
                activeLink === link.href
                  ? "rgba(255, 255, 255, 0.11)"
                  : undefined
              }
              borderRadius={activeLink === link.href ? "9px" : undefined}
              onClick={() => handleLinkClick(link.href)}
              _hover={{
                textDecoration: "none",
                bg: "rgba(255, 255, 255, 0.11)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </Flex>

        <Flex
          display={{ base: "none", lg: "flex" }}
          gap="30px"
          alignItems="center"
        >
          <Button
            fontSize="13px"
            fontWeight={700}
            color="white"
            px="25px"
            py="10px"
            borderRadius="8px"
            bg="#2E2E2E"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              height: "5px",
              background: "linear-gradient(to right, #4E4E4E, #262626)",
              borderRadius: "0 0 8px 8px",
            }}
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
            fontSize="13px"
            fontWeight={700}
          >
            Hire us
          </Button>
        </Flex>

        <Flex
          display={{ base: "flex", lg: "none" }}
          fontSize="25px"
          cursor="pointer"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </Flex>
      </Flex>

      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bg="rgba(0, 0, 0, 0.4)"
          backdropFilter="blur(4px)"
          zIndex="999"
          onClick={() => setIsOpen(false)}
        />
      )}

      <Box
        position="fixed"
        top="0"
        right={isOpen ? "0" : "-100%"}
        h="100vh"
        w="80%"
        maxW="300px"
        bg="black"
        color="white"
        zIndex="1000"
        p="25px"
        transition="right 0.3s ease-in-out"
      >
        <Flex
          justify="flex-end"
          fontSize="25px"
          cursor="pointer"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </Flex>

        <VStack align="center" my="20px" fontSize="16px" mt="80px">
          {navLinks.map((link) => (
            <Link
              color="white"
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              px={activeLink === link.href ? "20px" : undefined}
              py={activeLink === link.href ? "8px" : undefined}
              bg={
                activeLink === link.href
                  ? "rgba(255, 255, 255, 0.11)"
                  : undefined
              }
              borderRadius={activeLink === link.href ? "9px" : undefined}
              w="fit-content"
              textAlign="center"
              _hover={{
                textDecoration: "none",
                bg: "rgba(255, 255, 255, 0.11)",
              }}
            >
              {link.label}
            </Link>
          ))}

          <Button
            w="100%"
            fontSize="13px"
            fontWeight={700}
            color="white"
            mt="20px"
            borderRadius="8px"
            bg="#2E2E2E"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              height: "5px",
              background: "linear-gradient(to right, #4E4E4E, #262626)",
              borderRadius: "0 0 8px 8px",
            }}
          >
            Contact us
          </Button>
          <Button
            w="100%"
            borderBottom="8px solid #6C9B23"
            bg="#9BFF00"
            color="black"
            borderRadius="11px"
            px="25px"
            py="10px"
            fontSize="13px"
            fontWeight={700}
          >
            Hire us
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Navbar;
