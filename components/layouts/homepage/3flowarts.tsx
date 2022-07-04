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
const HomeFlowarts: NextPage = () => {
  return (
    <Container
      // Row container
      bg={useColorModeValue("cyan.200", "cyan.700")}
      display="flex"
      flexDir="row"
      id="Flowarts"
      justifyContent="center"
      minW="100%"
    >
      <Center
      // Poi Image wrapper
      >
        <Box borderRadius="5px" boxShadow="2xl" margin={10} overflow="hidden">
          <AspectRatio ratio={3 / 4} width={325}>
            <Image
              alt="Neffrey Spinning Poi"
              cursor="pointer"
              src="/konnexion.jpg"
            />
          </AspectRatio>
        </Box>
      </Center>

      <Container
        // Text box container
        as="div"
        bg={useColorModeValue("gray.100", "gray.800")}
        borderRadius="5px"
        margin={20}
        padding={10}
      >
        <VStack
          // Text Vstack
          marginBottom={2}
        >
          <Heading as="h2" marginBottom={3} size="lg" textAlign="center">
            Flowarts <br />
            Dancing With Props
          </Heading>
          <Text marginTop={40}>
            Prop-based dance, aka flowarts in my world, is what I love. It is my
            daily meditation and my favorite thing to do for fun.
          </Text>
          <Text>
            After being around it for just a few months, I made it a part of my
            daily life. It has been such a blessing in my life both physically
            AND mentally.
          </Text>
          <Text>
            I've already been lucky enough to perform in front of hundreds as a
            festival dancer. My goal is to one day travel around performing and
            teaching workshops at festivals.
          </Text>
        </VStack>
      </Container>
    </Container>
  );
};
export default HomeFlowarts;
