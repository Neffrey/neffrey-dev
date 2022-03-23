// FRAMEWORK
import React, { useContext } from "react";
import { Box, Center, Flex } from "@chakra-ui/react";

// COMPONENTS
import HeaderAccountBtn from "./header/headerAccountBtn";
import BrandingBtn from "./brandingBtn";
import HeaderMenuBtn from "./headerMenuBtn";

// CONTEXTS
import { UserContext } from "../contexts/userProvider";

// Component Function
const Header = () => {
  const { userDarkMode } = useContext(UserContext);
  return (
    <Flex bg={userDarkMode ? "cyan.600" : "cyan.600"} w="100%">
      <Box w="33%">
        <HeaderMenuBtn />
      </Box>
      <Box w="34%">
        <Center>
          <BrandingBtn />
        </Center>
      </Box>
      <Box w="33%">
        <HeaderAccountBtn />
      </Box>
    </Flex>
  );
};
export default Header;
