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
  Icon,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useMediaQuery,
  useTheme,
  VStack,
} from "@chakra-ui/react";

// TYPES
import type { NextPage } from "next";

// MY COMPONENTS
import GraphQlLogo from "components/ui/graphql-logo";

// COMPONENT FUNCTION
const HomeWebDevelopment: NextPage = () => {
  return (
    <Container
      // Row container
      bg={useColorModeValue("cyan.200", "cyan.700")}
      display="flex"
      flexDir="row"
      id="webdevelopment"
      justifyContent="center"
      minW="100%"
    >
      <Container
        // Text box container
        as="div"
        bg={useColorModeValue("gray.100", "gray.800")}
        borderRadius="5px"
        margin={25}
        padding={10}
      >
        <VStack
          // VStack of main text block
          marginBottom={2}
        >
          <Heading
            // Row Heading
            as="h2"
            marginBottom={5}
            textAlign="center"
          >
            ReactJS and Wordpress
          </Heading>
          <Text>
            Speaking of my own development projects, that's where most of my
            time has been going lately. I’ve been honing my skills in the React
            ecosystem; My main direction now is using a React front end with
            WordPress powering it as a headless CMS through GraphQL.
          </Text>
          <Text>
            This site is with React and is tied to a live , another project I
            have in the works is React paired with WordPress and GraphQL. It’s a
            community-based trick dictionary app for flowarts. I can’t share too
            much about that yet. More info coming!
          </Text>
          <HStack
          // Logos HStack
          >
            <VStack
              // WordPress Logo & Header
              padding={4}
            >
              <Image
                alt="WordPress Logo"
                cursor="cursor"
                height={{ base: "50px", md: "70px", lg: "90px" }}
                src="/wp-logo.svg"
              />
              {/* <Icon
                alt="WordPress Logo"
                cursor="cursor"
                height={{ base: "50px", md: "70px", lg: "90px" }}
                src="/wp-logo.svg"
              /> */}
              <Heading as="h4" size="md" textAlign="center">
                WordPress
              </Heading>
            </VStack>

            <VStack
              // ReactJS Logo & Header
              padding={4}
            >
              <Image
                alt="ReactJS Logo"
                cursor="cursor"
                height={{ base: "50px", md: "70px", lg: "90px" }}
                src="/react-logo.svg"
              />
              <Heading as="h4" size="md" textAlign="center">
                ReactJS
              </Heading>
            </VStack>

            <VStack
              // GraphQL Logo & Header
              padding={4}
            >
              {/* <Image
                alt="GraphQL Logo"
                cursor="cursor"
                height={{ base: "50px", md: "70px", lg: "90px" }}
                src="/graphql-logo.svg"
              /> */}
              <GraphQlLogo />
              <Heading as="h4" size="md" textAlign="center">
                GraphQL
              </Heading>
            </VStack>
          </HStack>
        </VStack>
      </Container>
    </Container>
  );
};
export default HomeWebDevelopment;
