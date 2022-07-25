// Framework
import React from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  useTheme,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";

// My Components
import BrandingBtn from "components/molecules/brandingBtn";

// Component Function
const Footer: React.FC = () => {
  const theme = useTheme();
  let currentYear = new Date();
  return (
    <Container variant="ndFooter">
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}>
        <GridItem
          w="100%"
          sx={{
            "& > div > div": { marginX: "auto" },
            [`@media only screen and (min-width: ${
              theme?.breakpoints?.md || "768px"
            })`]: {
              "& > div > div": { marginX: "inherit" },
            },
          }}
        >
          <BrandingBtn />
        </GridItem>
        <GridItem p={4} w="100%">
          <Heading fontSize="lg" textAlign="center">
            FOOTER COMP
          </Heading>
        </GridItem>
        <GridItem p={4} w="100%">
          <Text textAlign={{ base: "center", lg: "right" }}>Hi Mom</Text>
        </GridItem>
      </Grid>
      <Heading as="h6" fontSize="xs" textAlign="center">
        Copyright © {currentYear.getFullYear()}
      </Heading>
    </Container>
  );
};
export default Footer;
