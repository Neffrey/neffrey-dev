// FRAMEWORK
import React from "react";
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";


// COMPONENT FUNCTION
const HomeAbout: React.FC = () => {
  return (
    <Container
      // Row container
      id="about"
      bg={useColorModeValue("gray.200", "gray.700")}
      display="flex"
      flexDir="row"
      flexWrap="wrap-reverse"
      justifyContent="center"
      minW="100%"
      paddingY={5}
    >
      <Container
        // Text box container
        as="div"
        bg={useColorModeValue("gray.100", "gray.900")}
        borderRadius="5px"
        margin={{ base: 10, lg: 20 }}
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
          <AspectRatio ratio={3 / 4} width={{ base: 280, sm: 325, lg: 300 }}>
            <Image alt="Neffrey Selfie" cursor="pointer" src="/selfie.jpg" />
          </AspectRatio>
        </Box>
      </Center>
    </Container>
  );
};
export default HomeAbout;
