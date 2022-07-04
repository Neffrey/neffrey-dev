// FRAMEWORK
import React from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  IconButton,
  HStack,
  Image,
  Text,
  useColorModeValue,
  useMediaQuery,
  useTheme,
  useToken,
  VStack,
} from "@chakra-ui/react";
import { FcExpand } from "react-icons/fc";

// TYPES
import type { NextPage } from "next";
import Link from "next/link";

// COMPONENT FUNCTION
const HomeHero: NextPage = () => {
  // Get theme colors
  const [dropShadowColor, dropShadowColorDark] = useToken(
    // the key within the theme, in this case `theme.colors`
    "colors",
    // the subkey(s), resolving to `theme.colors.red.100`
    ["cyan.700", "cyan.200"]
    // a single fallback or fallback array matching the length of the previous arg
  );
  return (
    <Container
      // Row Container
      variant="ndHero"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      position="relative"
      _before={{
        // Background Image
        backgroundImage: {
          base: "url(../../../lake-flow-bw-600.jpg)",
          md: "url(../../../lake-flow-bw-960.jpg)",
          lg: "url(../../../lake-flow-bw-1280.jpg)",
          xl: "url(../../../lake-flow-bw-1920.jpg)",
        },
        backgroundSize: "cover",
        backgroundPosition: "center 66%",
        content: '""',
        display: "block",
        height: "100%",
        left: "0",
        opacity: "1",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: "-2",
      }}
      _after={{
        // Bg Color Overlay
        backgroundColor: useColorModeValue("cyan.300", "cyan.900"),
        content: '""',
        display: "block",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        opacity: useColorModeValue("0.7", "0.6"),
        mixBlendMode: useColorModeValue("screen", "multiply"),
      }}
    >
      <Container
        // Text Box Container
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        marginTop={{ base: "42%", md: "40%", lg: "10%" }}
        marginLeft={{ base: "0", md: "30%", lg: "47%" }}
        variant="ndTextBox"
      >
        <Link href="./#about">
          <Heading as="h1" textAlign="center" w="100%">
            Meet Neffrey
          </Heading>
        </Link>
        <Link href="./#flowart">
          <Text as="p" textAlign="center" w="100%">
            Flow Artist
          </Text>
        </Link>
        <Link href="./#graphic-design">
          <Text as="p" textAlign="center" w="100%">
            Graphic Designer
          </Text>
        </Link>
        <Link href="./#web-developer">
          <Text as="p" textAlign="center" w="100%">
            Web Developer
          </Text>
        </Link>
        <Button mt={5} variant="cyanBtn" opacity="0.75">
          Send Me A Message
        </Button>
      </Container>
      <Container
        // Scroll Down Arrow Btn
        marginBottom={4}
        width="100%"
      >
        <Center>
          <Link href="./#about">
            <IconButton
              aria-label="Learn More About Neffrey"
              bg="none"
              icon={<FcExpand />}
              fontSize="5xl"
              sx={{
                "& polygon": {
                  fill: useColorModeValue("cyan.700", "white"),
                },
              }}
              _active={{
                background: "none",
              }}
              _focus={{
                background: "none",
              }}
              _hover={{
                background: "none",
                filter: `drop-shadow(0px 4px 4px ${useColorModeValue(
                  "rgba(0,0,0,0.4)",
                  "rgba(0,0,0,0.6)"
                )} )`,
                transform: `translateY(-4px)`,
                transition: "filter 0.25s ease, transform 0.25s",
              }}
            />
          </Link>
        </Center>
      </Container>
    </Container>
  );
};
export default HomeHero;

