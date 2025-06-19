import { Box, Button, Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { selectedCategory } from "../store";

interface Category {
  id: string;
  name: string;
}

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
    <Box width="100%" position={"relative"} padding="1"  bg={"#0B0B0B"} >
      <Flex
        
        overflowX="auto"
        whiteSpace="nowrap"
        gap="12px"
        alignItems="center"
        justifyContent={{base:"start",md:"center"}}
        paddingX={{base:"20px",md:"40px"}}
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
            fontSize={{base:"11px" , md:"16px"}}
          >
            {category.name}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default CategoryToggle;
