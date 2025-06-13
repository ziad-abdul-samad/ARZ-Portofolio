import { Box } from "@chakra-ui/react";
import HeadingTitle from "./components/HeadingTitle";
import CardsContainer from "./components/CardsContainer";

export default function ServicesPage() {
  return (
    <Box bg={"#0B0B0B"} px={"70px"}  >
      <HeadingTitle />
      <CardsContainer />
    </Box>
  );
}
