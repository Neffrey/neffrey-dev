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
  Grid,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  useMediaQuery,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import ContactForm from "components/organisms/contactForm";

const initialValues = { name: "", message: "" };

// COMPONENT FUNCTION
const HomeContact: React.FC = () => {
  return (
    <Container
      // Row container
      id="contact"
      bg={useColorModeValue("gray.200", "gray.700")}
      minW="100%"
      padding={20}
    >
      <Container
        // Text box container
        bg={useColorModeValue("gray.100", "gray.900")}
        borderRadius="5px"
        marginY={20}
        padding={10}
        minW={{ base: "65vw", md: "70vw", lg: "60vw" }}
      >
        <Heading as="h3" marginBottom={10} textAlign="center">
          Get In Touch
        </Heading>
        <Center>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
            }}
          >
            <Box marginBottom={5}>
              <Text>
                Currently I not offering design and development services. I want
                any time spent on graphic art and web development to be on my
                own projects.
              </Text>
              <Text>
                There are many beautiful ideas in my head. I want to see some of
                them actually get made.
              </Text>
              <Text>
                If you do have a project that you reeaaallyyy want my help with
                and you are prepared to pay BIG BUCKS then send me a message and
                I’ll get back to you as soon as I can.
              </Text>
            </Box>
            <Box>
              <ContactForm />
            </Box>
          </Grid>
        </Center>
      </Container>
    </Container>
  );
};
export default HomeContact;
