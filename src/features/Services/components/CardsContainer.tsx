import { Grid } from "@chakra-ui/react";
import Card from "./Card";

const cardData = [
  {
    image: "/image/service-image01.png",
    icon: "svg/Services/service-icon01.svg",
    title: "Web Development",
    description:
      "We craft scalable and robust web applications tailored to your business needs, delivering seamless user experiences.",
  },
  {
    image: "/image/service-image02.png",
    icon: "svg/Services/service-icon02.svg",
    title: "UI/UX Design",
    description:
      "Designing captivating interfaces and user experiences that leave lasting impressions and improve usability.",
  },
  {
    image: "/image/service-image03.png",
    icon: "svg/Services/service-icon03.svg",
    title: "Mobile Development",
    description:
      "iOS & Android apps that deliver smooth performance, intuitive UX, and next-gen mobile experiences",
  },
  {
    image: "/image/service-image04.png",
    icon: "svg/Services/service-icon04.svg",
    title: "Graphic Design",
    description:
      "Bring your ideas to life with creative designs that capture attention, and elevate your brand identity.",
  },
  {
    image: "/image/service-image05.png",
    icon: "svg/Services/service-icon05.svg",
    title: "Digital Marketing",
    description:
      "Transform your digital presence with strategies that amplify traffic, engagement and create lasting customer connections",
  },
  {
    image: "/image/service-image02.png",
    icon: "svg/Services/service-icon06.svg",
    title: "Content Creation",
    description:
      "Engage your audience with compelling content tailored to tell your story, strengthen your brand, and drive action.",
  },
];

const CardsContainer = () => {
  return (
    <Grid
      gridTemplateColumns={{base:["repeat(1,1fr)"],md:["repeat(2, 1fr)"]}}
      placeItems="center"
      px={["20px", "60px", "120px"]}
      gap="20px"
      bg="#080808FA"
      pb="50px"
      borderBottom="solid #1D280A 20px"
      borderRadius="22px"
    >
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Grid>
  );
};

export default CardsContainer;
