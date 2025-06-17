import { Flex} from "@chakra-ui/react";
import Box01 from "./Box01";
import Box02 from "./Box02";
import Box03 from "./Box03";

const BoxContainer = () => {
    return ( <>
    <Flex px={{base:"30px",md:"70px"}} justifyContent={"space-between"} alignItems={"baseline"} bg={"#0B0B0B"} py={"50px"} gap={{base:"26px",md:"37px"}} flexDir={{base:"column", lg:"row"}}>
        <Box01/>
        <Box02/>
        <Box03/>
    </Flex>
    </> );
}
 
export default BoxContainer;