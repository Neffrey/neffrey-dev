// FRAMEWORK
import React from "react";
import Head from "next/head";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  useMediaQuery,
  useTheme,
  VStack,
} from "@chakra-ui/react";

// TYPES
import type { NextPage } from "next";

// COMPONENT FUNCTION
const HomeGraphicDesign: NextPage = () => {
  return (
    <Container
      // Row container
      bg={useColorModeValue("gray.200", "gray.700")}
      display="flex"
      flexDir="row"
      id="graphicdesign"
      justifyContent="center"
      minW="100%"
    >
      <Container
        // Text box container
        as="div"
        bg={useColorModeValue("gray.100", "gray.900")}
        borderRadius="5px"
        margin={10}
        padding={10}
      >
        <VStack
          // Text VStack
          marginBottom={5}
        >
          <Heading as="h3" size="xl" marginBottom={5} textAlign="center">
            Graphic Design
          </Heading>
          <Text>
            Graphic design has been a hobby of mine for 15 years now. Previously
            I really enjoyed digital painting like this Forest Wolf. These types
            of projects were put on the back as most of my time in Photoshop and
            Illustrator was spent making functional art like logos and user
            interfaces. In the future I'd like to have merch with my designs for
            sale here so stay tuned.
          </Text>

          <Text>
            Nowadays I no longer offering design and development services. I
            want any time spent on graphic art and web development to be on my
            own projects. There are many beautiful ideas in my head. I want to
            see some of them actually get made.
          </Text>
        </VStack>
      </Container>

      <Center
      // Graphic art IMG wrapper
      >
        <Box borderRadius="5px" boxShadow="2xl" margin={5} overflow="hidden">
          <AspectRatio ratio={12 / 9} width={500}>
            <Image
              alt="Neffrey's Graphic Art Piece Forest Wolf"
              cursor="pointer"
              src="/forest_wolf.jpg"
            />
          </AspectRatio>
        </Box>
      </Center>
    </Container>
  );
};
export default HomeGraphicDesign;
