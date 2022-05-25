import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";
import TopBar from "../components/TopBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <JotaiProvider>
        <TopBar />
        <Component {...pageProps} />
      </JotaiProvider>
    </ChakraProvider>
  );
}

export default MyApp;
