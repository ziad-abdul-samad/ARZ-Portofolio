import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Box bg={"#010200"} pb={"50px"}>
      <Box
        bg={"#1A230A"}
        px={"40px"}
        py={"50px"}
        borderBottomRightRadius={"50px"}
        borderBottomLeftRadius={"50px"}
      >
        <Box bg="#DEDEDE" px={"50px"} borderRadius="md" maxW="lg" mx="auto">
          <VStack py={"20px"} align="stretch">
            <Box>
              <Text
                fontWeight={500}
                fontSize={{ base: "10px", md: "21px" }}
                color="black"
                mb={"10px"}
              >
                Name
              </Text>
              <Input
                fontSize={"18px"}
                fontWeight={400}
                placeholder="Enter your name"
                bg="black"
                color="#A4A4A4"
                _placeholder={{
                  color: "#A4A4A4",
                  padding: "10px",
                  fontSize: ["9px", "18px"],
                }}
                borderRadius={"11px"}
              />
            </Box>
            <Box my={"10px"}>
              <Text
                fontWeight={500}
                fontSize={{ base: "10px", md: "21px" }}
                color="black"
                mb={"10px"}
              >
                E-mail
              </Text>
              <Input
                fontSize={"18px"}
                placeholder="Enter your email"
                bg="black"
                color="#A4A4A4"
                _placeholder={{
                  color: "#A4A4A4",
                  padding: "10px",
                  fontSize: ["9px", "18px"],
                }}
                borderRadius={"11px"}
              />
            </Box>
            <Box>
              <Text
                fontWeight={500}
                fontSize={{ base: "10px", md: "21px" }}
                color="black"
                mb={"10px"}
              >
                Message
              </Text>
              <Textarea
                fontSize={"18px"}
                height={{base:"150px",md:"200px"}}
                placeholder="Write your message"
                bg="black"
                color="white"
                _placeholder={{
                  color: "#A4A4A4",
                  padding: "10px",
                  fontSize: ["9px", "18px"],
                }}
                borderRadius={"11px"}
              />
            </Box>
            <Button
              bg="#9FFE00"
              color="black"
              w="full"
              _hover={{ bg: "lime.300" }}
            >
              Send Message
            </Button>
          </VStack>
        </Box>
        <Image
          maxW={{base:"125px",md:"400px"}}
          pt={"50px"}
          mb={"-150px"}
          mx={"auto"}
          src="svg/Footer/arz-logo-footer.svg"
        />
      </Box>
    </Box>
  );
};

export default ContactCard;
