import {
  Box,
  Button,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Index = () => {
  // const { data, error } = useSWR(
  //   user ? ["/api/getFood", user.token] : null,
  //   fetcher
  // );
  // if (!user) {
  //   return (
  //     <>
  //       <p>Hi there!</p>
  //       <p>
  //         You are not signed in.{" "}
  //         <Link href={"/auth"}>
  //           <a>Sign in</a>
  //         </Link>
  //       </p>
  //     </>
  //   );
  // }

  return (
    // <div>
    //   <div>
    //     <p>You're signed in. Email: {user.email}</p>
    //     <p
    //       style={{
    //         display: "inline-block",
    //         color: "blue",
    //         textDecoration: "underline",
    //         cursor: "pointer",
    //       }}
    //       onClick={() => logout()}
    //     >
    //       Log out
    //     </p>
    //   </div>
    //   <div>
    //     <Link href={"/example"}>
    //       <a>Another example page</a>
    //     </Link>
    //   </div>
    //   {error && <div>Failed to fetch food!</div>}
    //   {data && !error ? (
    //     <div>Your favorite food is {data.food}.</div>
    //   ) : (
    //     <div>Loading...</div>
    //   )}
    // </div>
    <>
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
            Twice Polls
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
            Unofficial Fan Voting Site for Onces
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
              Get Started
            </Button>
          </a>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image
            src="https://0.soompi.io/wp-content/uploads/2017/04/28061756/TWICE3.jpg?s=900x600&e=t"
            size="100%"
            rounded="1rem"
            shadow="2xl"
          />
        </Box>
      </Flex>

      {/* <Box m={2}>Chakra UI</Box>
      <Button>Test Button</Button> */}
    </>
  );
};

export default Index;
