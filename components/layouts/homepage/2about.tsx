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
const HomeAbout: NextPage = () => {
  return (
    <Container
      // Row container
      bg={useColorModeValue("gray.200", "gray.700")}
      display="flex"
      flexDir="row"
      id="about"
      justifyContent="center"
      minW="100%"
    >
      <Container
        // Text box container
        as="div"
        bg={useColorModeValue("gray.100", "gray.900")}
        borderRadius="5px"
        margin={20}
        padding={10}
      >
        <VStack marginBottom={5}>
          <Heading as="h3" marginBottom={5} textAlign="center">
            About Me
          </Heading>
          <Text>
            At the start of 2020, I moved across the country to the Minneapolis
            MN area for a complete career change. With that change, I am no
            longer offering web development services. Nowadays you can find me
            at my job as a casino blackjack dealer, dancing around with my flow
            props, sometimes making graphic art, honing my web dev skills, and
            spending time with friends when possible!
          </Text>
        </VStack>
      </Container>
      
      <Center
      // Selfie IMG Wrapper
      >
        <Box borderRadius="5px" boxShadow="2xl" margin={10} overflow="hidden">
          <AspectRatio ratio={3 / 4} width={275}>
            <Image alt="Neffrey Selfie" cursor="pointer" src="/selfie.jpg" />
          </AspectRatio>
        </Box>
      </Center>
    </Container>
  );
};
export default HomeAbout;
