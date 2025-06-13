import { Box } from "@chakra-ui/react";
import BoxContainer from "./components/BoxContainer";
import HeadingTitle from "./components/HeadingTitle";
import InfoSection from "./components/InfoSection";
import OfferCardContainer from "./components/OfferCardContainer";

export default function AboutUsPage() {
  return (
    <>
    <Box bg={"#0B0B0B"}>
    <HeadingTitle/>
    <OfferCardContainer/>
    <BoxContainer/>
    <InfoSection/>
    </Box>
    </>
  );
}
