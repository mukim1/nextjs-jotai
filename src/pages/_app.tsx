import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";
import TopBar from "../components/TopBar";

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <JotaiProvider>
        <TopBar />
        <Component {...pageProps} />
      </JotaiProvider>
    </ChakraProvider>
  );
}

export default MyApp;
