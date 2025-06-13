import { motion } from "framer-motion";
import { useState } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "../../../App.css";
const projects = [
  {
    name: "PCA Website",
    largeImage: "image/project-image-large01.png",
    miniImages: [
      "image/project-image-mini01.png",
      "image/project-image-mini02.png",
      "image/project-image-mini03.png",
    ],
    description:
      "We developed a state-of-the-art digital presence for Global Retail Solutions, an interconnected global network specializing in luxury retail manufacturing and visual merchandising. The website serves as a flagship digital portfolio, showcasing their exceptional projects, expertise, and global presence with an emphasis on luxury, storytelling, and interactivity.",
  },
  {
    name: "PCA Website2",
    link: "https//:wdqd.com",
    largeImage: "image/project-image-large01.png",
    miniImages: [
      "image/project-image-mini01.png",
      "image/project-image-mini02.png",
      "image/project-image-mini03.png",
    ],
    description:
      "We developed a state-of-the-art digital presence for Global Retail Solutions, an interconnected global network specializing in luxury retail manufacturing and visual merchandising. The website serves as a flagship digital portfolio, showcasing their exceptional projects, expertise, and global presence with an emphasis on luxury, storytelling, and interactivity.",
  },
];

export default function ProjectsCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <Box
        minH="80vh"
        display="flex"
        justifyContent="center"
        py={12}
        bg="#0B0B0B"
      >
        <Box width="100%" maxWidth="1200px">
          <Flex direction={{ base: "column", xl: "row" }} gap={10}>
            {/* Project Name */}
            <Flex
              direction="column"
              width={{ base: "100%", xl: "50%" }}
              gap={8}
            >
              <Heading fontSize="4xl" fontWeight="bold" color="#9FFE00">
                {projects[currentIndex].name}
              </Heading>
            </Flex>

            {/* Image Section */}
            <Box width="100%">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={false}
                navigation={true}
                // modules={[Navigation]}
                onSlideChange={handleSlideChange}
                className="swiper-container"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <Flex width="100%" align="center" gap={4} px={"90px"}>
                      {/* Large Image */}
                      <Box flex="3">
                        <Image
                          src={project.largeImage}
                          alt={`${project.name} large image`}
                          borderRadius="lg"
                          width="100%"
                        />
                      </Box>

                      {/* Mini Images (Stacked Vertically) */}
                      <Flex flex="1" flexDirection="column" gap={2}>
                        {project.miniImages.map((imageSrc, imgIndex) => (
                          <Image
                            key={imgIndex}
                            src={imageSrc}
                            alt={`${project.name} mini ${imgIndex}`}
                            borderRadius="md"
                            width="100%"
                          />
                        ))}
                      </Flex>
                    </Flex>
                    <Text
                      py={"40px"}
                      fontWeight={300}
                      fontSize={"20px"}
                      color={"white"}
                    >
                      {project.description}
                    </Text>
                    <Flex>
                      <Button
                        color={"#FFFDFD"}
                        fontWeight={700}
                        fontSize={"17px"}
                        borderRadius={"9px"}
                        px={"30px"}
                        py={"25px"}
                        mx={"auto"}
                        bg={"#181818"}
                        borderBottom={"solid #C5C5C5 4px"}
                      >
                        View full project
                      </Button>
                    </Flex>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Flex>
        </Box>
      </Box>
    </motion.section>
  );
}
