import { Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
    return ( 
        <Flex justify={"space-between"} px={"70px"} py={"30px"} bg={"black"} color={"white"} alignItems={"center"}>
            <Image src="svg/arz-logo.svg" alt="logo" />
            <Flex gapX={"20px"}>
                <a href="#Home">Home</a>
                <a href="#AboutUs">About Us</a>
                <a href="#Services">Services</a>
                <a href="#OurProjects">Our Projects</a>
                <a href="#OurProcess">Our Process</a>
                <a href="#Blogs">Blogs</a>
            </Flex>
            <Flex>
                <button>Contact us</button>
                <button>Hire us</button>
            </Flex>
        </Flex>
     );
}
 
export default Navbar;