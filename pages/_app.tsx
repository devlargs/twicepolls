import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { theme } from "styles/themes";
import "styles/globals.css";
import Header from "components/Header";
import SVG from "constants/svgBackgrounds";
import NProgress from "nprogress";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider as ReduxProvider } from "react-redux";
import store from "store";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const nprogressStart = () => NProgress.start();
    const nprogressDone = () => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", nprogressStart);
    router.events.on("routeChangeComplete", nprogressDone);
    router.events.on("routeChangeError", nprogressDone);

    return () => {
      router.events.off("routeChangeStart", nprogressStart);
      router.events.off("routeChangeComplete", nprogressDone);
      router.events.off("routeChangeError", nprogressDone);
    };
  }, []);

  return (
    <ReduxProvider store={store}>
      <Box
        style={{
          backgroundColor: "#eeeeee",
          backgroundImage: `url("${SVG.checkered}")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <ChakraProvider theme={theme}>
          <Header />
          <Box h={4} />
          <Component {...pageProps} />
        </ChakraProvider>
      </Box>
    </ReduxProvider>
  );
};

export default App;
