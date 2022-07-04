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
const HomeContact: NextPage = () => {
  return (
    <Container
      // Row container
      bg={useColorModeValue("gray.200", "gray.700")}
      display="flex"
      flexDir="row"
      id="contact"
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
        <VStack
          // Text & Form Vstack
          marginBottom={5}
        >
          <Heading as="h3" marginBottom={2} textAlign="center">
            Get In Touch
          </Heading>
          <Text>
            Send me a quick message and I’ll get back to you as soon as I can.
            Again, I’m not trying to take on any design or development jobs
            unless you REALLY want me to do it and you’re ready to pay REALLY
            big bucks. My attention is elsewhere :/
          </Text>
        </VStack>
      </Container>
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
    </Container>
  );
};
export default HomeContact;
