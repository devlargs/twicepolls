import { Box, Button, Flex, Stack, Heading, Image } from "@chakra-ui/react";
import CONFIG from "constants/config";
import Link from "next/link";

const Index = () => (
  <Flex
    align="center"
    justify={{ base: "center", md: "space-around", xl: "space-between" }}
    direction={{ base: "column-reverse", md: "row" }}
    wrap="nowrap"
    minH="70vh"
    px={8}
    mb={16}
  >
    <Stack
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
        {CONFIG.appTitle}
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
        {CONFIG.home.subtitle}
      </Heading>
      <a>
        <Link href="/lists">
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            Get Started
          </Button>
        </Link>
      </a>
    </Stack>
    <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
      <Image src={CONFIG.home.img} size="100%" rounded="1rem" shadow="2xl" />
    </Box>
  </Flex>
);

export default Index;
