import "tailwindcss/tailwind.css";
import "styles/globals.css";
import { Box } from "@chakra-ui/react";
import Header from "components/Header";
import NProgress from "nprogress";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider as ReduxProvider } from "react-redux";
import store from "store";
import Footer from "components/Footer";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

if (process.browser) {
  Sentry.init({
    dsn:
      "https://f7537a082e0b4eb4a0c403ac365506be@o508817.ingest.sentry.io/5601980",
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

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
      <>
        <Header />
        <Box h={4} />
        <Component {...pageProps} />
        <Footer />
      </>
    </ReduxProvider>
  );
};

export default App;
