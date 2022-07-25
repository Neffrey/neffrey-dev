// FRAMEWORK
import React, { useContext, useState } from "react";
import Link from "next/link";
import { Avatar, Box, Center, Heading, HStack, SimpleGrid } from "@chakra-ui/react";

// CONTEXTS
import { UserContext } from "components/contexts/userProvider";

// Component Function
const HeaderAccountUser = () => {
  // Context
  const { loginUser, logoutUser, userErrorMsg, userId, userName } =
    useContext(UserContext);
  return (
    <HStack justifyContent="flex-end" w="100%">
      <Link href="/account" passHref>
        <Heading
          as="h5"
          cursor="pointer"
          fontSize="xs"
          fontWeight="semibold"
          overflowWrap="normal" 
          wordBreak="keep-all"
        >
          {`${userName || "Neffrey"}'s Account`}
        </Heading>
      </Link>
      <Link href="/account" passHref>
        <Avatar size="sm" mx={2} cursor="pointer" />
      </Link>
    </HStack>
  );
};
export default HeaderAccountUser;
