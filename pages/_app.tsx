// IMPORT TYPES
import type { AppProps } from "next/app";

// FRAMEWORK
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

// Default Styles And Fonts
import Theme from "theme/index";
import "./styles.css";
import "@fontsource/roboto";
import "@fontsource/big-shoulders-display";

// CONTEXT
import UserContext from "components/contexts/userProvider";

// COMPONENTS
import Header from "components/templates/header";
import Footer from "components/templates/footer";



// APP FUNCTION
const PtWebApp = ({ Component, pageProps }: AppProps) => {
  return (
    //<UserContext>
      <ChakraProvider resetCSS theme={Theme}>
        {console.log("Theme OBJ in _app:", Theme)}
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    //</UserContext>
  );
}

export default PtWebApp;
