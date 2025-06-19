import { Box } from "@chakra-ui/react";
import HeadingTitle from "./components/HeadingTitle";
import CardsContainer from "./components/CardsContainer";

export default function ServicesPage() {
  return (
    <Box bg={"#0B0B0B"} px={{base:"18px",md:"70px"}} id="Services" >
      <HeadingTitle />
      <CardsContainer />
    </Box>
  );
}
