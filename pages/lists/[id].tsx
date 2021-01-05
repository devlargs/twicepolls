import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo } from "react";

const ListById = () => {
  const router = useRouter();
  const title = useMemo(() => {
    const temp = `${router.query.id}`.split("-");
    // const id = temp[temp.length - 1];
    temp.pop();
    return temp.join(" ");
  }, [router.query.id]);

  return (
    <Box ml="20vw" mr="20vw">
      <Text fontSize="3xl">{title}</Text>
    </Box>
  );
};

export default ListById;
