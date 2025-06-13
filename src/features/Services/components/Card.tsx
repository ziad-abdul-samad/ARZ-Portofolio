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
      bg="#020202"
      borderRadius="15px"
      padding="20px"
      justifyContent="center"
      alignItems="center"
      gap="20px"
    >
      <Image
        src={image}
        alt={title}
        borderRadius="8px"
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
        loading="lazy"
      />
      <Flex flexDir="column" alignItems="flex-start" gap="10px">
        <Image src={icon} alt={`${title} icon`} loading="lazy" />
        <Text fontWeight={700} fontSize={["16px", "18px", "20px"]} color="#9FFE00">
          {title}
        </Text>
        <Text fontWeight={400} fontSize="12px" color="white">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;
