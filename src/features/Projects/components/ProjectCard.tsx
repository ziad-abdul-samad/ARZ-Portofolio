import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
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
      "We developed a state-of-the-art digital presence for Global Retail Solutions...",
  },
];

export default function ProjectsCard() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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
        <Box width="100%" maxWidth="1200px" position="relative">
          {/* Changed to always use column layout */}
          <Flex direction="column" gap={10} px={{ base: 4, md: 8 }}>
            {/* Project Name - now always above images */}
            <Box>
              <Heading fontSize={{base:"16px",md:"34px"}} fontWeight="bold" color="#9FFE00">
                {projects[currentIndex].name}
              </Heading>
            </Box>

            {/* Image Section */}
            <Box
              width="100%"
              overflow="hidden"
              ref={emblaRef}
              position="relative"
            >
              <Flex width="100%">
                {projects.map((project, index) => (
                  <Box key={index} flex="0 0 100%" minWidth="0">
                    {/* Image Container */}
                    <Flex width="100%" align="center" gap={4}>
                      {/* Large Image */}
                      <Box flex={{ base: "1", md: "3" }}>
                        <Image
                          src={project.largeImage}
                          alt={`${project.name} large image`}
                          borderRadius="lg"
                          width="100%"
                        />
                      </Box>

                      {/* Mini Images (Stacked Vertically) */}
                      <Flex
                        flex={{ base: "0", md: "1" }}
                        flexDirection="column"
                        gap={2}
                        display={{ base: "none", md: "flex" }}
                      >
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

                    {/* Description and Button */}
                    <Box py="40px">
                      <Text fontWeight={300} fontSize={{base:"12px",md:"20px"}} color="white">
                        {project.description}
                      </Text>
                      <Flex mt={6}>
                        <Button
                          color="#FFFDFD"
                          fontWeight={700}
                          fontSize={{base:"12px",md:"17px"}}
                          borderRadius="9px"
                          px="30px"
                          py="25px"
                          mx="auto"
                          bg="#181818"
                          borderBottom="solid #C5C5C5 4px"
                          _hover={{ bg: "#222222" }}
                        >
                          View full project
                        </Button>
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </Flex>

              {/* Custom Navigation Buttons */}
              <button
                onClick={scrollPrev}
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "40%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  color: "#6C6C6C",
                  border: "none",
                  fontSize: "100px",
                  cursor: "pointer",
                  zIndex: 1,
                }}
                aria-label="Previous slide"
              >
                &#8249;
              </button>
              <button
                onClick={scrollNext}
                style={{
                  position: "absolute",
                  right: "0px",
                  top: "40%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  color: "#6C6C6C",
                  border: "none",
                  fontSize: "100px",
                  cursor: "pointer",
                  zIndex: 1,
                }}
                aria-label="Next slide"
              >
                &#8250;
              </button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </motion.section>
  );
}
