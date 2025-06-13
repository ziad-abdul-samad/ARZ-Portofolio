import { Flex } from "@chakra-ui/react";
import OfferCard01 from "./OfferCard01";
import OfferCard02 from "./OfferCard02";

const OfferCardContainer = () => {
  return (
    <>
      <Flex flexDir={"column"} px={"70px"} gap={"60px"} bg={"#0B0B0B"}>
        <OfferCard01/>
        <OfferCard02/>
      </Flex>
    </>
  );
};

export default OfferCardContainer;
