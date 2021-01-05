import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { theme } from "styles/themes";
import "styles/globals.css";
import Header from "components/Header";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
