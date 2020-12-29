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
        {/* <Flex
          align="center"
          justify={{ base: "center", md: "space-around", xl: "space-between" }}
          direction={{ base: "column-reverse", md: "row" }}
          wrap="nowrap"
          minH="70vh"
          px={8}
          mb={16}
        > */}
        <Component {...pageProps} />
        {/* </Flex> */}
      </Flex>
    </ChakraProvider>
  );
};

{
  /* <Stack
          spacing={4}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            Titles
          </Heading>
          <Heading
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
          >
            Subtitle
          </Heading>
          <a>
            <Button
              colorScheme="primary"
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
            >
              CTA Text
            </Button>
          </a>
          <Text
            fontSize="xs"
            mt={2}
            textAlign="center"
            color="primary.800"
            opacity="0.6"
          >
            No credit card required.
          </Text>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          {/* TODO: Make this change every X secs
          <Image
            src="https://0.soompi.io/wp-content/uploads/2017/04/28061756/TWICE3.jpg?s=900x600&e=t"
            size="100%"
            rounded="1rem"
            shadow="2xl"
          />
        </Box> */
}

export default App;
