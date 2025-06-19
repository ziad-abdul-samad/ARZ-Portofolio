import { Box } from "@chakra-ui/react";
import ContactCard from "./components/ContactCard";
import ContactHeading from "./components/ContactHeading";

export default function ContactPage() {
  return (
    <>
      <Box px={{base:"0",md:"20px"}} bg={"#010200"}>
        <ContactHeading />
        <ContactCard />
      </Box>
    </>
  );
}
