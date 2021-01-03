import { Flex, Box, Text, useBreakpointValue } from "@chakra-ui/react";
import ListBox from "components/ListBox";

const Lists = () => {
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
      <Flex wrap="wrap" justifyContent="center" p={5}>
        <ListBox w={w} h={h} text="Lorem ipsum" m={m} p={p} />
        <ListBox
          w={w}
          h={h}
          text="Lorem ipsum asdf asdf asdf asdf"
          m={m}
          p={p}
        />
        <ListBox
          w={w}
          h={h}
          text="Lorem ipsum asdf asdf asdf asdf"
          m={m}
          p={p}
        />
        <ListBox w={w} h={h} text="Fuck you" m={m} p={p} />
      </Flex>
    </>
  );
};

export default Lists;
