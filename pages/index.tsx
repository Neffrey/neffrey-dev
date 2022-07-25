// FRAMEWORK
import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

// TYPES
import type { NextPage } from "next";

// COMPONENTS
import HomeHero from "components/templates/homepage/hero";
import HomeAbout from "components/templates/homepage/about";
import HomeFlowarts from "components/templates/homepage/flowarts";
import HomeGraphicDesign from "components/templates/homepage/graphicDesign";
import HomeWebDevelopment from "components/templates/homepage/webDevelopment";
import HomeContact from "components/templates/homepage/contact";

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
