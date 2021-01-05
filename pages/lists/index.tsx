import { Flex, useBreakpointValue, Spinner, Text, Box } from "@chakra-ui/react";
import ListBox from "components/ListBox";
import SEO from "components/SEO";
import config from "constants/config";
import { usePolls } from "store/pollsState";

const Lists = () => {
  const { lists, loading } = usePolls();

  const h = "auto";
  const m = 4;
  const p = 5;
  const w = useBreakpointValue({
    xl: "auto",
    lg: "auto",
    md: "auto",
    sm: "100%",
    base: "100%",
  });

  return (
    <>
      <SEO title={`Listing Page | ${config.appTitle}`} />
      <Box w={"100%"} textAlign="center">
        <Text fontSize="4xl" mb={0}>
          List of Polls
        </Text>
      </Box>
      <Flex wrap="wrap" justifyContent="center" p={5}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {lists.length ? (
              <>
                {lists.map((q) => {
                  if (q.question) {
                    return (
                      <ListBox
                        key={q.id}
                        id={q.id}
                        w={w}
                        h={h}
                        text={q.question}
                        m={m}
                        p={p}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </>
            ) : (
              <>No data yet.</>
            )}
          </>
        )}
      </Flex>
    </>
  );
};

export default Lists;
