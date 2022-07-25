// FRAMEWORK
import React, { useContext } from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";

// COMPONENTS
import DarkModeToggleBtn from "components/molecules/darkModeToggleBtn";
import BrandingBtn from "components/molecules/brandingBtn";
import MenuBtn from "components/molecules/menuBtn";

// CONTEXTS
import { UserContext } from "components/contexts/userProvider";
import AccountBtn from "components/organisms/accountBtn";

// Component Function
const Header: React.FC = () => {
  return (
    <Container variant="ndHeader">
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
        }}
      >
        <GridItem colSpan={1}>
          <BrandingBtn />
        </GridItem>

        {/*** TODO: MENU COMPONENT ***/}

        <GridItem colStart={2}>
          <HStack justifyContent="flex-end">
            <AccountBtn />
            <DarkModeToggleBtn />
          </HStack>
        </GridItem>
      </Grid>
    </Container>
  );
};
export default Header;

/*
<Grid templateColumns='repeat(5, 1fr)' gap={4}>
  <GridItem colSpan={2} h='10' bg='tomato' />
  <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
</Grid>
*/
