import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import SEO from "components/SEO";
import config from "constants/config";

const ListById = ({ id, title }) => {
  const fontSize = useBreakpointValue({
    sm: "2xl",
    md: "2xl",
    lg: "3xl",
    xl: "3xl",
  });

  return (
    <>
      <SEO title={`${title} | ${config.appTitle}`} />
      <Box ml="20vw" mr="20vw">
        <Text color="primary.500" fontSize={fontSize}>
          {title}
        </Text>
      </Box>
    </>
  );
};

ListById.getInitialProps = (ctx) => {
  const temp = `${ctx.query.id}`.split("-");
  const id = temp[temp.length - 1];
  temp.pop();

  return {
    title: temp.join(" "),
    id,
  };
};

export default ListById;
