// FRAMEWORK
import React from "react";
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Heading,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";


// COMPONENT FUNCTION
const HomeGraphicDesign: React.FC = () => {
  return (
    <Container
      // Row container
      id="graphicdesign"
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
        bg={useColorModeValue("gray.100", "gray.900")}
        borderRadius="5px"
        marginX={10}
        marginY={{ base: 10, lg: 20 }}
        padding={10}
      >
        <VStack>
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
        </VStack>
      </Container>

      <Center
      // Graphic art IMG wrapper
      >
        <Box borderRadius="5px" boxShadow="2xl" margin={10} overflow="hidden">
          <AspectRatio
            as={Box}
            ratio={12 / 9}
            width={{ base: 300, md: 400, lg: 600 }}
          >
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

{
  /* <Text>
Nowadays I no longer offering design and development services. I
want any time spent on graphic art and web development to be on my
own projects. There are many beautiful ideas in my head. I want to
see some of them actually get made.
</Text> */
}
