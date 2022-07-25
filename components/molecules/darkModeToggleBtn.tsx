// FRAMEWORK
import React, { useContext } from "react";
import {
  AspectRatio,
  IconButton,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

// CONTEXTS
import { UserContext } from "components/contexts/userProvider";

// Component Function
const HeaderMenuBtn = () => {
  // Chakra UI Vars
  const { colorMode, toggleColorMode } = useColorMode();

  // Contexts
  const { userColorState, toggleColorState } = useContext(UserContext);

  const handleClick = () => {
    toggleColorMode();
    toggleColorState();
  };

  return (
    <>
      {/* MENU BUTTON  */}
      <AspectRatio as="div" ratio={1} width={16}>
        <IconButton
          aria-label="Open Menu"
          fontSize="2xl"
          icon={userColorState === "light" ? <FaMoon /> : <FaSun />}
          onClick={handleClick}
          sx={{ boxShadow: "none!important" }}
          variant="unstyled"
        />
      </AspectRatio>
    </>
  );
};
export default HeaderMenuBtn;
