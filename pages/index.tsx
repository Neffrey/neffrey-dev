// FRAMEWORK
import React from "react";
import Head from "next/head";
import { Box, Center, Container, Flex, Heading, Image } from "@chakra-ui/react";
import { Variant } from "framer-motion";

// TYPES
import type { NextPage } from "next";

// COMPONENTS
import HomeHero from "../components/layouts/homepage/1hero";
import HomeAbout from "../components/layouts/homepage/2about";
import HomeFlowarts from "../components/layouts/homepage/3flowarts";
import HomeGraphicDesign from "../components/layouts/homepage/4graphicDesign";
import HomeWebDevelopment from "../components/layouts/homepage/5webDevelopment";
import HomeContact from "../components/layouts/homepage/6contact";

// PAGE FUNCTION
const Home: NextPage = () => {
  return (
    <Box w="100%">
      <Head>
        <title>Neffrey - Dancer, Designer, Developer</title>
      </Head>
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeFlowarts />
        <HomeGraphicDesign />
        <HomeWebDevelopment />
        <HomeContact />
      </main>
    </Box>
  );
};

export default Home;
