import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { theme } from "styles/themes";
import "styles/globals.css";
import Header from "components/Header";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Header />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
