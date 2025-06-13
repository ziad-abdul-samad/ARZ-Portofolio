import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { selectedCategory } from "../store";

// Define the type for a category
interface Category {
  id: string;
  name: string;
}

// Array of categories with the defined type
const CATEGORIES: Category[] = [
  { id: "All", name: "All" },
  { id: "Software Development", name: "Software Development" },
  { id: "Digital Marketing", name: "Digital Marketing" },
  { id: "UI/UX Design", name: "UI/UX Design" },
  { id: "Graphic Design", name: "Graphic Design" },
  { id: "Branding", name: "Branding" },
];

const CategoryToggle = () => {
  const [activeCategory, setActiveCategory] = useAtom(selectedCategory);

  return (
    <Box width="100%" position={"relative"} padding="4"  bg={"#0B0B0B"} >
        <Image src="image/projects-bg.png" position={"absolute"} zIndex={0} bottom={"0"}  />
      <Flex
        
        overflowX="auto"
        whiteSpace="nowrap"
        gap="12px"
        alignItems="center"
        justifyContent={"center"}
        paddingX="40px"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {CATEGORIES.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            bg={activeCategory === category.id ? "#E7E7E7" : "#1E1E1E"}
            color={activeCategory === category.id ? "black" : "white"}
            borderRadius="28px"
            padding="18px 36px"
            fontWeight="normal"
            flexShrink="0"
          >
            {category.name}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default CategoryToggle;
