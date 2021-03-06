// FRAMEWORK
import React from "react";
import {
  AspectRatio,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";

// Component Function
const MenuBtn = () => {
  // Chakra Disclosure
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* MENU BUTTON  */}
      <AspectRatio as="div" ratio={1} width={16}>
        <IconButton
          aria-label="Open Menu"
          fontSize="2xl"
          icon={<FcMenu />}
          onClick={onOpen}
          sx={{ boxShadow: "none!important" }}
          variant="unstyled"
        />
      </AspectRatio>
      {/* DRAWER HERE */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <h4>Drawer Body Text. Hi there</h4>
          </DrawerBody>

          <DrawerFooter>
            <Heading mr={3} /* onClick={onClose} ** USED TO BE BUTTON */>
              Cancel
            </Heading>
            <Heading>Save</Heading>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default MenuBtn;
