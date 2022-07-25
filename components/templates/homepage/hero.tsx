// FRAMEWORK
import React from "react";
import Link from "next/link";
import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
  useToken,
  VStack,
} from "@chakra-ui/react";
import { FcExpand } from "react-icons/fc";


// COMPONENT FUNCTION
const HomeHero: React.FC = () => {
  // Get theme colors from inside theme.colors
  const [dropShadowColor, dropShadowColorDark] = useToken("colors", [
    "cyan.700",
    "cyan.200",
  ]);
  return (
    <Container
      // Row Container
      as={Grid}
      variant="ndHero"
      position="relative"
      templateColumns={{
        base: "1fr",
        md: "repeat(5, 1fr)",
      }}
      templateRows={{
        base: "repeat(3, 1fr)",
        md: "repeat(5, 1fr)",
      }}
      // Background Image
      _before={{
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
      // Bg Color Overlay
      _after={{
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
      <GridItem
        // Text Box
        colSpan={{ base: 1, md: 3 }}
        colStart={{ base: 1, md: 2, lg: 3 }}
        rowSpan={{ base: 1, md: 2 }}
        rowStart={{ base: 2, md: 2 }}
      >
        <Container
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          variant="ndTextBox"
          width="100%"
        >
          <Link href="./#about">
            <Heading as="h1" textAlign="center" w="100%">
              Meet Neffrey
            </Heading>
          </Link>
          <Link href="./#flowart">
            <Text as="p" textAlign="center" w="100%" mt={3}>
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
      </GridItem>

      <GridItem
        // Scroll Down Arrow Btn
        colStart={{ base: 1, md: 3 }}
        rowStart={5}
        marginBottom={5}
      >
        <VStack
          justifyContent="flex-end"
          height="100%"
          width="100%"
        >
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
        </VStack>
      </GridItem>
    </Container>
  );
};
export default HomeHero;
