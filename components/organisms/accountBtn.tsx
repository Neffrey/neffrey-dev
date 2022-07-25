// FRAMEWORK
import React, { useContext, useState } from "react";
import Link from "next/link";
import { Avatar, Box, Center, Flex, Heading, HStack } from "@chakra-ui/react";

// COMPONENTS
import AccountBtnUser from "components/molecules/accountBtnUser";
import AccountBtnNoUser from "components/molecules/accountBtnNoUser";

// CONTEXTS
import { UserContext } from "components/contexts/userProvider";

// Component Function
const AccountBtn = () => {
  // Context
  const { loginUser, logoutUser, userErrorMsg, userId, userName } =
    useContext(UserContext);
  return userId ? <AccountBtnUser /> : <AccountBtnNoUser />;
};
export default AccountBtn;
