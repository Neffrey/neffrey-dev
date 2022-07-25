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
  SimpleGrid,
  Text,
  useColorModeValue,
  useMediaQuery,
  useTheme,
  VStack,
} from "@chakra-ui/react";

// MY COMPONENTS
import SVGIcon from "components/molecules/graphqlLogo";
import GraphqlLogo from "components/molecules/graphqlLogo";
import ReactJSLogo from "components/molecules/reactjsLogo";
import WordPressLogo from "components/molecules/wordpressLogo";

// COMPONENT FUNCTION
const HomeWebDevelopment: React.FC = () => {
  const DevIconSizes = { base: 150, md: 125, lg: 100 }
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

          <SimpleGrid
            // Logos Grid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            paddingTop={5}
            spacing={5}
          >
            <VStack
              // WordPress Logo & Header
              padding={4}
            >
              <AspectRatio
                color={useColorModeValue("black", "white")}
                ratio={1}
                width={200}
                maxH={DevIconSizes}
              >
                <WordPressLogo />
              </AspectRatio>
              <Heading as="h4" size="md" textAlign="center">
                WordPress
              </Heading>
            </VStack>

            <VStack
              // ReactJS Logo & Header
              padding={4}
            >
              <AspectRatio
                color={useColorModeValue("black", "white")}
                ratio={1}
                width={200}
                maxH={DevIconSizes}
              >
                <ReactJSLogo />
              </AspectRatio>
              <Heading as="h4" size="md" textAlign="center">
                ReactJS
              </Heading>
            </VStack>

            <VStack
              // GraphQL Logo & Header
              padding={4}
            >
              <AspectRatio
                color={useColorModeValue("black", "white")}
                ratio={1}
                width={200}
                maxH={DevIconSizes}
              >
                <GraphqlLogo />
              </AspectRatio>
              <Heading as="h4" size="md" textAlign="center">
                GraphQL
              </Heading>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Container>
  );
};
export default HomeWebDevelopment;
