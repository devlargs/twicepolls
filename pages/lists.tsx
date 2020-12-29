import { SimpleGrid, Box } from "@chakra-ui/react";

const Lists = () => {
  return (
    <SimpleGrid columns={3} spacing={10}>
      <Box bg="primary.500" p={5}>
        <p style={{ color: "white" }}>
          Who's the prettiest girl in twice?
          <br />
          created by: Pau lo
        </p>
      </Box>
      <Box bg="primary.500" p={5}>
        <p style={{ color: "white" }}>Who's the prettiest girl in twice?</p>
      </Box>
      <Box bg="primary.500" p={5}>
        <p style={{ color: "white" }}>Who's the prettiest girl in twice?</p>
      </Box>
      <Box bg="primary.500" p={5}>
        <p style={{ color: "white" }}>Who's the prettiest girl in twice?</p>
      </Box>

      <Box bg="primary.500" p={5}>
        <p style={{ color: "white" }}>Who's the prettiest girl in twice?</p>
      </Box>

      <Box bg="primary.500" p={5}>
        <p style={{ color: "white" }}>Who's the prettiest girl in twice?</p>
      </Box>
    </SimpleGrid>
  );
};

export default Lists;
