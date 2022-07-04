// FRAMEWORK
import React, { useContext } from "react";
import { Box, Center, Container, Flex } from "@chakra-ui/react";

// COMPONENTS
import DarkModeToggleBtn from "../../ui/darkModeToggleBtn";
import BrandingBtn from "../../ui/brandingBtn";
import HeaderMenuBtn from "./headerMenuBtn";

// CONTEXTS
import { UserContext } from "../../contexts/userProvider";

// Component Function
const Header = () => {
  return (
    <Container variant="ndHeader">
      <Box w="45%">
        <BrandingBtn />
      </Box>
      <Box w="45%">
        {/*** TODO: MENU COMPONENT ***/}
      </Box>
      <Box sx={{ "& > div": { float: "right" }}} w="10%">
        <DarkModeToggleBtn />
      </Box>
    </Container>
  );
};
export default Header;
