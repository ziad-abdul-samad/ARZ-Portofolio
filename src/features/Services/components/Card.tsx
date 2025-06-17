import { Flex, Image, Text } from "@chakra-ui/react";

interface CardProps {
  image: string;
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, icon, title, description }) => {
  return (
    <Flex
      h={{base:"fit",md:"240px"}}
      bg="#020202"
      borderRadius="15px"
      padding={{base:"5px" , md:"20px"}}
      justifyContent="center"
      alignItems="center"
      gap="20px"
    >
      <Image
        maxW={{base:"100px"}}
        src={image}
        alt={title}
        borderRadius="8px"
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
      />
      <Flex flexDir="column" alignItems="flex-start" gap="10px">
        <Image src={icon} alt={`${title} icon`} maxW={{base:"26px"}} />
        <Text
          fontWeight={700}
          fontSize={["12px", "18px", "20px"]}
          color="#9FFE00"
        >
          {title}
        </Text>
        <Text fontWeight={400} fontSize={{base:"10px",md:"12px"}} color="white">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;
